const {
    buildSchema
} = require('graphql');
const {
    authTypes,
    authMutations
} = require('./auth');

module.exports = buildSchema(`
    ${authTypes}
    type RootQuery {
        events: String!
    }
    type RootMutation {
        ${authMutations}
    }
    schema {
        query: RootQuery
        mutation: RootMutation  
    }
`);