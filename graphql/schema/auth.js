module.exports = {
    authTypes: `
        type User {
            email: String!
            name: String!
        }
        type AuthData {
            token: String!
            user: User
        }
        input UserInput {
            email: String!
            name: String
            password: String
        }
    `,
    authMutations: `
        registerUser(userInput: UserInput!): AuthData!
        loginUser(userInput: UserInput!): AuthData!
    `
}