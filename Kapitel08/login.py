import uvicorn
from fastapi import FastAPI, Depends, status
from fastapi.responses import RedirectResponse, HTMLResponse
from fastapi.security import OAuth2PasswordRequestForm
from fastapi_login import LoginManager
from fastapi_login.exceptions import InvalidCredentialsException

app = FastAPI()

manager = LoginManager("jsk2e1urh3fku371", token_url="/auth/login", use_cookie=True)
manager.cookie_name = "ch.fhnw.testapp_hezd736"

DB = {"user1": {"name": "Hans Muster", 
                "email": "hanswurst@gmail.com",
                "passwort": "12345"},
      "user2" : {
                "name": "Alexandra Meier",
                "email": "ameier@gmx.net",
                "passwort": "pass"}
    }

@manager.user_loader()
def load_user(username: str):
    user = DB.get(username)
    return user


@app.post("/auth/login")
def login(data: OAuth2PasswordRequestForm = Depends()):
    username = data.username
    password = data.password
    user = load_user(username)

    if not user:
        raise InvalidCredentialsException
    if user['passwort'] != password:
        raise InvalidCredentialsException

    access_token = manager.create_access_token(
        data = {"sub": username}
    )

    resp = RedirectResponse(url="/private", status_code=status.HTTP_302_FOUND)
    manager.set_cookie(resp, access_token)

    return resp

@app.get("/")
def login():
    file = open("templates/login.html", encoding="utf-8")
    data = file.read()
    file.close()
    return HTMLResponse(content=data)

@app.get("/private", response_class=HTMLResponse)
def getSecretPage(user=Depends(manager)):
    print("Private Page!!!!")
    return "Hello " + user["name"]


uvicorn.run(app, host="127.0.0.1", port=8000)
