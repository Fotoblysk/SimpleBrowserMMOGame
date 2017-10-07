import auth
import userActions
import db
from aiohttp import web
import time


print("starting backend")
time.sleep(100)
print("loading DB")
# ignore 400 cause by IndexAlreadyExistsException when creating an index
db.es.indices.create(index='map', ignore=400)
db.es.indices.create(index='players', ignore=400)


app = web.Application()
app.router.add_post('/api/login', auth.login)
app.router.add_post('/api/register', auth.register)
app.router.add_post('/api/smallmap', userActions.getMap)

web.run_app(app)
