from sqlalchemy import create_engine
from sqlalchemy import Table, Column, Integer, String, MetaData

engine = create_engine("sqlite:///testdb.db")
#engine = create_engine("postgresql://username:passwort@server.com/testdb")

meta = MetaData()

students = Table(
    'students', meta,
    Column('id', Integer, primary_key = True),
    Column('name', String),
    Column('lastname', String)
)

s = students.select()
result = engine.execute(s)

for zeile in result:
    print(zeile)

print("#"*20)

s = students.select().where(students.c.id>3)
result = engine.execute(s)

for zeile in result:
    print(zeile)

print("#"*20)

s = students.select().where(students.c.lastname == "Meier")
result = engine.execute(s)

for zeile in result:
    print(zeile)
