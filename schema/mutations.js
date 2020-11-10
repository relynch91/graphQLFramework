const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLNonNull } = graphql;
const mongoose = require('mongoose');
const UserType = require('./user_type');
const User = mongoose.model("user");

const GraphQLInt = GraphQLString;
const mutation = new GraphQLObjectType({
    
    name: "Mutation",
    fields: {
        newUser: {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(String)},
                email: { type: new GraphQLNonNull(String) },
                password: { type: new GraphQLNonNull(String) }
            },
            resolve(parentValue, { name, email, password }) {
                return new User ({ name, email, password}).save();
            }
        }
    }
})
module.exports = mutation;