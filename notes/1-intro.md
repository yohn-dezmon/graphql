# What is GraphQL?

- net ninja also has a course on NodeJS
- alternative to REST API with endpoints
- GraphQL is a query language
- still HTTP requests under the hood

# REST API vs GraphQL

- GET or POST `pokemonsite.com/api/pokemon`
- GET or POST `pokemonsite.com/api/pokemon/123`

# drawbacks of REST API

- overfetching -- server sends back more data than we need
- underfetching -- don't get back all of the data we need, resulting in making multiple requests.
  - you may need to make one request per course but you need 100s of courses

# GraphQL

- there is just a single endpoint, e.g. `mygraphqlsite.com/graphql`
- you can fetch **nested** related data within a single query

# GraphQL Syntax

```graphql
Query {
    courses {
        id,
        title,
        thumbnail_url
    }
}
```

Nested query!

```graphql
Query {
    course(id: "1") {
        id,
        title,
        thumbnail_url,
        author {
            name,
            id,
            courses {
                id,
                title,
                thumbnail_url
            }
        }
    }
}
```
# Apollo Server

- we'll make a GraphQL server from scratch with NodeJS
- we'll use a package called apollo server for GraphQL support
- to send queries we'll use apollo explorer (like postman for GraphQL)



