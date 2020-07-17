const {
    buildSchema
} = require('graphql');
const {
    authTypes,
    authQuery,
    authMutations
} = require('./auth');
const {
    logTypes,
    logMutations,
    logQuery
} = require('./logs');
module.exports = buildSchema(`
    ${authTypes}
    ${logTypes}
    type RootQuery {
        ${authQuery}
        ${logQuery}
    }
    type RootMutation {
        ${authMutations}
        ${logMutations}
    }
    schema {
        query: RootQuery
        mutation: RootMutation  
    }
`);