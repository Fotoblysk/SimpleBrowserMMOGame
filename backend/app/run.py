from aiohttp import web
from redis import Redis
import json
import jwt
from elasticsearch import Elasticsearch
import time
time.sleep(60)
es = Elasticsearch("elasticsearch1", http_auth=('elastic', 'changeme'))

# ignore 400 cause by IndexAlreadyExistsException when creating an index
es.indices.create(index='map', ignore=400)
es.indices.create(index='players', ignore=400)

redis = Redis(host='redis', port=6379)

async def handle(request):
    name = request.match_info.get('name', "Anonymous")
    text = "Hello, " + name
    return web.Response(text=text)

async def login(request):
    secret = "2t4m8hbBgsQ2qJFi4BPmHQFoGqwINiZO"
    data = (await request.json())
    login = data["login"]
    password = data["password"]
    print("login: " + login)
    print("password: " + password)
    esResponse = es.get(index="players", doc_type="user_data", id=login,
                        ignore=404)
    print(esResponse)

    if esResponse['found'] is False:
        return web.json_response(data={"status": "No"})

    dataPassword = esResponse['_source']['password']

    if password == dataPassword:
        tocken = jwt.encode({"login": login}, secret, algorithm='HS256')
        print(tocken)
        return web.json_response(
            data={"status": "Ok", "tocken": tocken.decode()}
        )
    else:
        return web.json_response(data={"status": "Bad"})

async def register(request):
    data = (await request.json())
    login = data["login"]
    password = data["password"]
    email = data["email"]
    print("login: " + login)
    print("password: " + password)
    print("email: " + email)
    userData = json.dumps({"password": password,
                           "email": email})
    redis.set("CRED:user:" + login, userData)
    es.index(index="players", doc_type="user_data", id=login, body=userData)
    return web.Response(text="Ok")


app = web.Application()
app.router.add_post('/api/login', login)
app.router.add_post('/api/register', register)

web.run_app(app)
