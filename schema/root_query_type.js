const graphQL = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLNonNull } = graphQL;
const mongoose = require("mongoose");
const User = mongoose.model("user");
const UserType = require("./user_type");
const Post = mongoose.model("post");
const PostType = require('./post_type');

const RootQuery = new GraphQLObjectType ({
    name: "RootQueryType",
    fields: {
        users: {
            type: new GraphQLList(UserType),
            resolve() {
                return User.find({})
            }
        },
        user: {
            type: UserType,
            args: { id: { type: new GraphQLNonNull(UserType) }},
            resolve(parentValue, args) {
                return User.findById(args.id);
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve() {
                return Post.find({})
            }
        },
        post: {
            type: PostType,
            args: { id: { type: new GraphQLNonNull(PostType) }},
            resolve(parentValue, args) {
                return Post.findById(args.id);
            }
        }
    }
})

module.exports = RootQuery;