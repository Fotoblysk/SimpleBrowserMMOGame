from auth import need_auth
from aiohttp import web
import db


@need_auth
async def getMap(request):
    data = (await request.json())
    print(str(data))
    return web.json_response(data={"status": "test"})
