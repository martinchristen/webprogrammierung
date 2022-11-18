import uvicorn

import sqlalchemy
import databases
from fastapi import FastAPI, Form, Request
from fastapi.templating import Jinja2Templates

database = databases.Database('sqlite:///datenbank.db')
engine = sqlalchemy.create_engine('sqlite:///datenbank.db', 
            connect_args={"check_same_thread": False})
metadata = sqlalchemy.MetaData()

notes = sqlalchemy.Table(
    "notes", metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("title", sqlalchemy.String),
    sqlalchemy.Column("text", sqlalchemy.String)
)

metadata.create_all(engine)

app = FastAPI()
templates = Jinja2Templates(directory="templates/")

@app.on_event("startup")
async def startup():
    print("Verbinde Datenbank")
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    print("Beende DB Verbindung")
    await database.disconnect()

@app.get("/notes")
async def read_notes():
    query = notes.select()
    return await database.fetch_all(query)

@app.get("/new")
async def create_note(request: Request):
    return templates.TemplateResponse('form2.html', context={'request': request})

@app.post("/new")
async def post_note(titel=Form(), text=Form()):
    query = notes.insert().values(title=titel, text=text)
    myid = await database.execute(query)
    return {"id": myid, "titel": titel, "text": text}

uvicorn.run(app, host="127.0.0.1", port=8000)