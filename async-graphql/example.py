import graphene
import aiohttp 

class Query(graphene.ObjecType):
    async_data = graphene.String()

    async def resolve_async_data(self, info):
        # ok, I could do this with SQLAlchemy, I assume they have 
        # an async session
        async with aiohttp.ClientSessoin() as session:
            async with session.get('https://api.example.com/data') as response:
                data = await response.json()
                return data.get('result', 'No data found')

schema = graphene.Schema(query=Query)

