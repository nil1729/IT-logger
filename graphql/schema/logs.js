module.exports = {
    logTypes: `
        type Log {
            _id: String
            message: String!
            attention: Boolean!
            updatedAt: String
            tech: User!
        }
        input LogInput {
            message: String!
            attention: Boolean!
            tech: ID!
        }
    `,
    logMutations: `
        createLog(logInput:LogInput!) : Log!
        updateLog(logInput:LogInput, id: String!): Log!
        deleteLog(id: String!): Log!
    `,
    logQuery: `
        logs: [Log!]!
        techs: [User!]!
    `
}