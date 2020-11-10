const graphql = require("graphql");
const { GraphQLObject, GraphQLID, GraphQLString } = graphql;
const mongoose = require("mongoose");
const Post = require("../models/Post");

const UserType = require('./user_type');
const User = mongoose.model("user")

const PostType = new graphql.GraphQLObjectType({
    name: "PostType",
    fields: {
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        body: { type: GraphQLString },
        author: {
            type: UserType,
            resolve(parentValue) {
                return User.findById(parentValue.author)
                    .then(user => user)
                    .catch(err => null);
            }
        }
    }
})
module.exports = PostType;