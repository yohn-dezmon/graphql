# test_async_isolated.py
import pytest
from schema import Query

@pytest.mark.asyncio
async def test_async_resolver_response():
    query = Query()
    result = await query.resolve_async_data(None)
    assert result == 'Expected Result'
