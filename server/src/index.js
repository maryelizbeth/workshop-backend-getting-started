const { ApolloServer, gql } = require('apollo-server');

const { readFileSync } = require('fs');
const typeDefs = gql(readFileSync('./src/schema.graphql', { encoding: 'utf-8' }));

const mocks = require('./mocks');

const server = new ApolloServer({
  typeDefs,
  mocks
});

server.listen({ port: process.env.PORT || 4000 }).then(({ port, url }) => {
  console.log(`
    🚀  Server is running
    🔉  Listening on port ${port}
    📭  Query at ${url}
  `);
});
