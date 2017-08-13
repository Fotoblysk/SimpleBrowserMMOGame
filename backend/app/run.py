from aiohttp import web
from redis import Redis
import json
import jwt

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
    redisRaw = redis.get("CRED:user:" + login)
    if redisRaw is None:
        return web.json_response(data={"status": "No"})
    redisData = json.loads(redisRaw.decode())
    dataPassword = redisData['password']
    print("redisRaw" + str(redisData))

    if password == dataPassword:
        tocken = jwt.encode(data, secret, algorithm='HS256')
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
    return web.Response(text="Ok")


app = web.Application()
app.router.add_post('/api/login', login)
app.router.add_post('/api/register', register)

web.run_app(app)
