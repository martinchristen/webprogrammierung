from sqlalchemy import create_engine
from sqlalchemy import Table, Column, Integer, String, MetaData


engine = create_engine("sqlite:///testdb.db")
meta = MetaData()

students = Table(
    'students', meta,
    Column('id', Integer, primary_key = True),
    Column('name', String),
    Column('lastname', String)
)

meta.create_all(engine)

ins = students.insert().values(name="Hans", lastname="Meier")
engine.execute(ins)

ins = students.insert().values(name="Andrea", lastname="Meier")
engine.execute(ins)

ins = students.insert().values(name="Max", lastname="Muster")
engine.execute(ins)


ins = students.insert().values([{"name": "Hansruedi", "lastname": "Müller"},
    {"name": "Hansruedi2", "lastname": "Müller2"},
    {"name": "Hansruedi3", "lastname": "Müller3"},
    {"name": "Hansruedi4", "lastname": "Müller4"},
    {"name": "Hansruedi5", "lastname": "Müller5"}])

engine.execute(ins)