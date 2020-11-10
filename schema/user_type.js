const graphQL = require("graphql");
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphQL;

const UserType = new GraphQLObjectType({
    name: "UserType",
    fields: {
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString }
    }
});

module.exports = UserType;