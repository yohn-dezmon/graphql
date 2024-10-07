import { ApolloServer } from '@apollo/server'; // preserve-line
import { startStandaloneServer } from '@apollo/server/standalone'; // preserve-line

import { typeDefs } from './schema.js';

import db from './_db.js';

const resolvers = {
    Query: {
        games() {
            // just needs to point to where to grab the data from
            // field selection is handled by graphql/graphql server
            return db.games
        },
        reviews() {
            return db.reviews 
        },
        // parent = parent resolver in a chain
        // args --> you can access any query variables from this obj
        // context --> context values across all of our resolvers
        review(parent, args) {

        }
        authors() {
            return db.authors
        }
    }
};

/*
games {
    title
}
*/


// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  
  // Passing an ApolloServer instance to the `startStandaloneServer` function:
  //  1. creates an Express app
  //  2. installs your ApolloServer instance as middleware
  //  3. prepares your app to handle incoming requests
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  
  console.log(`🚀  Server ready at: ${url}`);
