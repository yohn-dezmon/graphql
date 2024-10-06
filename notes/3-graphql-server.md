# Server infra

- NodeJS
- Apollo server (library)
  - automatically spins up an apollo explorer

```bash
mkdir graphql-server-example
cd graphql-server-example
npm init --yes && npm pkg set type="module"
```

Applications that run Apollo Server require two top-level dependencies:

- graphql
- @apollo/server

```bash
npm install @apollo/server graphql
```

Install `typescript` and `@types/node` packages into your project's dev dependencies:

```bash
npm install --save-dev typescript @types/node
```

```json
  "type": "module",
  "scripts": {
    "compile": "tsc",
    "start": "npm run compile && node ./dist/index.js"
  }
```

^ Put that into `package.json`:

- this tells typescript to compile your code into JS before using `node` to run that compiled code.
- setting the project's `type` to `module` loads your JS files as ES modules, which enables you to use the `await` calls

```bash
npm start
```

# GraphQL Schema

- every GraphQL server uses a schema to define the structure of data that clients can query
-

```ts
import { ApolloServer } from "@apollo/server"; // preserve-line
import { startStandaloneServer } from "@apollo/server/standalone"; // preserve-line

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Book {
    title: String
    author: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    books: [Book]
  }
`;
```

- clients will be able to execute a query named `books`, and our server will return an array of zero or more `Book`s

# Defining the dataset

...

# Define a resolver

- we've defined our data set, but Apollo server doesn't know that it should use that data set when it's executing a query
- we need a resolver to link the data set to our GraphQL Schema
- resolvers tell the server **how** to fetch data associated with a particular type

# Create an instance of ApolloServer

- server constructor requires
  - schema definition (typeDefs)
  - set of resolvers (resolvers)

```ts
// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
```

# Start server

`npm start`

going to `http://localhost:4000/` opens up Apollo Sandbox.

# Why do we define a Query type in addition to a resolver?

- Query Type:

  - part of the schema
  - defines fields that can be queried
  - the shape of responses
  - the arguments (if any)

- Resolver
  - provides the actual logic for fetching or calculating the data when a query is executed
  - when a client makes a request to the GraphQL API, the server uses the schema to determine whether the query is valid and then uses resolvers to actually fetch or compute the requested data
  - **so this would contain like the SQL or SQLAlchemy code to get the data from the db !!!**
