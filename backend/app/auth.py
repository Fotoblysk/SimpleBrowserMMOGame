import db
from aiohttp import web
import json
import jwt
import time
secret = "2t4m8hbBgsQ2qJFi4BPmHQFoGqwINiZO"


def need_auth(fn):
    async def fn_wraper(*args, **kwargs):
        try:
            data = (await args[0].json())
            print("tocken data: " + str(jwt.decode(data["tocken"], secret,
                                                   algorithm='HS256')))
            del data["tocken"]
            print(str(data))
            print(str(kwargs))
            return await fn(*args, **kwargs)
        except jwt.exceptions.DecodeError:
            raise web.HTTPUnauthorized()
    return fn_wraper

async def login(request):
    data = (await request.json())
    login = data["login"]
    password = data["password"]
    print("login: " + login)
    print("password: " + password)
    esResponse = db.es.get(index="players", doc_type="user_data", id=login,
                           ignore=404)
    print(esResponse)

    if esResponse['found'] is False:
        return web.json_response(data={"status": "No"})

    dataPassword = esResponse['_source']['password']

    if password == dataPassword:
        tocken = jwt.encode({"login": login}, secret, algorithm='HS256')
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
    db.redis.set("CRED:user:" + login, userData)
    db.es.index(index="players", doc_type="user_data", id=login, body=userData)
    return web.Response(text="Ok")
