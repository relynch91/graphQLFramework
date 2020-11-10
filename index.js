const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const User = require("./models/User");
const Post = require("./models/Post")
const schema = require('./schema/schema');
const graphQL = require("graphql");

mongoose
.connect(db)
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));
app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true
    })
);

app.get("/", (req, res) => res.send("Hello World"));
    

// app.use(
//     bodyParser.urlencoded({
//         extended: true
//     })
// );

app.use(bodyParser.json());


app.listen(5000, () => console.log("Server is running on Port 5000"));

// const router = express.Router();

// const createNewPost = router.post("/new", (req, res) => {
//     // remember to import your Post model from Mongoose!
//     const newPost = new Post({
//         title: req.body.title,
//         body: req.body.body,
//         date: req.body.date,
//         author: req.body.author
//     });

//     newPost
//         .save()
//         .then(savedPost => res.json(savedPost))
//         .catch(err => console.log(err));
// });

// app.use("/posts", createNewPost);

// const router = express.Router();

// const createNewUser = router.post("/new", (req, res) => {
//     // console.log('es');
//     User.findOne({ email: req.body.email })
//     .then(user => {
//         if (user) {
//             return res
//             .status(400)
//             .json({email: "A user has already registered with this email."})
//         } else {
//             console.log(req.body);
//             const newUserObj = new User ({
//                 name: req.body.name,
//                 email: req.body.email,
//                 password: req.body.password
//             });
//             newUserObj 
//             .save()
//             .then( savedUser => res.json(savedUser))
//             .catch( err => console.log(err))
//         }
//     })
//     // res.json("i dunno");
// })

// app.use("/users", createNewUser);
