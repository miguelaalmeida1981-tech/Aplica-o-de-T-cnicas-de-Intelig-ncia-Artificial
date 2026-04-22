import time
from fastapi import Request
from prometheus_client import Counter, Histogram, generate_latest

REQUEST_TIME = Histogram('comac_request_seconds', 'Tempo de requisição')
REQUEST_COUNT = Counter('comac_requests_total', 'Total de requisições', ['method', 'endpoint'])

@app.middleware("http")
async def monitoring(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    REQUEST_TIME.observe(time.time() - start_time)
    REQUEST_COUNT.labels(method=request.method, endpoint=request.url.path).inc()
    return response

@app.get("/metrics")
def metrics():
    return generate_latest()
