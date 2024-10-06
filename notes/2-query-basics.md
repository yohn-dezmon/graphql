- use apollo explorer
  - use apollo sandbox

```graphql
query ReviewsQuery {
  reviews {
    rating
    content
    id
  }
}
```

- lowercase `reviews` above is a **resource**
- for each resource, you need to specify which fields you need

Querying both the reviews and authors resources in a single query:

```graphql
query ReviewsQuery {
  reviews {
    rating
    author {
      name
    }
  }
}
```

- the above is only possible if when you create the GraphQL server, you inform it that given resources are related

- Getting the game with ID of 2

```graphql
Query {
    game(id: "2"){
        title
    }
}
```

- getting reviews of that game

```graphql
Query {
    game(id: "2"){
        title,
        review {
            rating
        },
    }
}
```

# Review Notes

```
query <name of query> {
  <resource> {
    <field>
  }
}
```

- when you create a GraphQl server, you need to connect data resources
- this allows you to do nested queries to get data from different resources in a single query

Getting a resource with a specific id:

- this is a "query variable"

```graphql
query get_game_id {
  game(id: "2") {
    title
  }
}
```
