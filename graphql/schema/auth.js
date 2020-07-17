module.exports = {
    authTypes: `
        type User {
            email: String
            name: String
            _id: ID
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
    authQuery: `
        loadUser: User!
    `,
    authMutations: `
        registerUser(userInput: UserInput!): AuthData!
        loginUser(userInput: UserInput!): AuthData!
        deleteUser(id: ID!): User
    `
}