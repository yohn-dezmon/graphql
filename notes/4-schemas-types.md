# Schemas and Types

`typeDefs` -- required argument for ApolloServer.

- Query type
- other types represent entities/resources, e.g. `type Book {}`
- the schema in `typeDefs` will tend to look similar to the schema of your database, though it doesn't have to be the same.e.g. you can omit fields if you don't need them in your GraphQL server.

- he's making a schema.js file to store typeDefs

# GraphQL syntax highlighting

- for JS, if you start a template string (e.g. a `` block) with #graphql then it will highlight the following as graphql syntax
- can you get syntax highlighting for graphql in python?
  - yep same extension, but put #graphql in the beginning of a `'''` block.
  - or use `gql(''' ''')`

# Types

- field types:
  - int, float, string, boolean, ID (serialized string)

# Query type

- defines MULTIPLE query entry points :D
- you only have one Query type per schema

```graphql
type Query {
  reviews: [Review]
}
```

- the above means that they can enter the graph via a review, and then jump around to different resources
- you have to define different entry points for single resources vs. all resources e.g. returning Book vs. [Book]


