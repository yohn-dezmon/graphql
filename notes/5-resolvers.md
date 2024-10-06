# Resolvers

- you define a single constant and within that constant define all of the functions for different resolvers
- we want to start by making resolver functions for the `Query` type
- you can also make resolver functions for the non-Query types

```ts
const resolvers = {
    <type-name>: {
        <resolver-fn>
    }
};
```

`nodemon` -- restarts the server everytime you make a change to the server

```bash
nodemon 
```
