import uvicorn
from fastapi import FastAPI, Request, Form
from fastapi.responses import RedirectResponse
from fastapi.templating import Jinja2Templates


app = FastAPI()
templates = Jinja2Templates(directory="templates/")

@app.post("/form")
def form_post(request: Request, num: int = Form(), num2: int = Form()):
    resultat = num + num2
    return templates.TemplateResponse('form.html', 
        context = {'request': request, 'result': resultat, 
        'num': num, 'num2': num2})

@app.get('/form')
def form_get(request: Request):
    return templates.TemplateResponse('form.html', 
        context={'request': request, 'result': "Bitte Zahl eingeben"})


uvicorn.run(app, host="127.0.0.1", port=8000)