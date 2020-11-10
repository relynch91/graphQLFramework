const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');

app.use(
    "/graphql",
    graphqlHTTP({
        graphiql: true
    })
);

mongoose
    .connect(db)
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));

app.use(bodyParser.json());

// all requests coming in to `graphql` will be handled
// by the expressGraphQL function from the 'express-graphql' library

app.listen(5000, () => console.log("Server is running on Port 5000"));