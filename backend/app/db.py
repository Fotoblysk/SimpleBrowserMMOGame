from elasticsearch import Elasticsearch
from redis import Redis
import time


print("DB loaded")
time.sleep(100)
es = Elasticsearch("elasticsearch1", http_auth=('elastic', 'changeme'))
redis = Redis(host='redis', port=6379)
