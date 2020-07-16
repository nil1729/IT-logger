module.exports = {
    logTypes: `
        type Log {
            _id: String
            message: String!
            attention: Boolean!
            tech: User!
        }
        input LogInput {
            message: String!
            attention: Boolean!
            tech: UserInput!
        }
    `,
    logMutations: `
        createLog(logInput:LogInput!) : Log!
        updateLog(logInput:LogInput, id: String!): Log!
        deleteLog(id: String!): Log!
    `,
    logQuery: `
        logs: [Log!]!
    `
}