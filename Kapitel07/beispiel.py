import requests
import json

url = "http://geodesy.geo.admin.ch/reframe/wgs84tolv95?easting=7.4&northing=46.9&altitude=550.0&format=json"

r = requests.get(url)
j = json.loads(r.text)
print(float(j['easting']))
print(j['northing'])
print(j['altitude'])
