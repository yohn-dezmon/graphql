- use `aiohttp` for async stuff
- you need to make sure your db interactions are async (e.g. make sure SQLAlchemy is configured for that)
- you need to make sure your schema and resolver functions are marked as async with async/await
-

- Graphene supports async execution contexts!
- if you're using an ASGI server like `uvicorn`, Graphene can handle async resolvers automatically

# proof it is async

- if I update a resolver at work to be async, how can I prove it is async?
- write a system test that will hit the query that is async, and add in a sleep statement so it takes like 10 s
- then hit another query that should return within ms
- you should get the second queries data first, then the

With ChatGPTs help:

- you would need to update your system test to be async with `async def`
- when you call the async resolver, you'd have to do `await query.resolve()`
- you may need to use `@pytest.mark.asyncio`

using `pytest-asyncio` helps isolate aysynchronous tests!

- If you're running multiple tests and only certain resolvers are async,
  using pytest-asyncio with @pytest.mark.asyncio helps you run specific tests asynchronously,
  which will fail if there's any blocking.

```python
# test_async_isolated.py
import pytest
from schema import Query

@pytest.mark.asyncio
async def test_async_resolver_response():
    query = Query()
    result = await query.resolve_async_data(None)
    assert result == 'Expected Result'
```

chat: https://chatgpt.com/share/671ed06a-212c-800d-949e-e032d5db5045
