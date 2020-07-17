if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({
        path: './config/.env'
    });
}

const express = require('express');
const app = express();
const connectDB = require('./config/db');
const {
    graphqlHTTP
} = require('express-graphql');
const schema = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');
const authMiddleware = require('./middleware/isAuthenticated');
const path = require('path');

connectDB();

app.use(authMiddleware);
if (process.env.NODE_ENV !== 'production') {
    app.use(require('cors')());
}

app.use(express.json());

app.use(
    '/api_graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: resolvers,
        graphiql: process.env.NODE_ENV === 'production' ? false : true,
    })
);

// Serve Static assests in Production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});