import uvicorn
from fastapi import FastAPI

app = FastAPI()

d = {}
g = {}
file = open("PLZO_CSV_LV95.csv", encoding="utf-8")
next(file)
for line in file:
    daten = line.strip().split(";")
    ort = daten[0]
    zip = daten[1]
    gemeinde = daten[3]
    kanton = daten[5]
    d[zip] = {"Ort": ort, "PLZ": zip, "Gemeinde": gemeinde, "Kanton": kanton }
    g[gemeinde] = {"Ort": ort, "PLZ": zip, "Gemeinde": gemeinde, "Kanton": kanton }

file.close()

@app.get("/plz")
async def plz(plz: str):
    if plz in d:
        return d[plz]

    return {"ERROR": "PLZ NOT FOUND"}


@app.get("/gemeinde")
async def plz(gem: str):
    if gem in g:
        return g[gem]

    return {"ERROR": "GEMEINDE NOT FOUND"}



uvicorn.run(app, host="127.0.0.1", port=8000)