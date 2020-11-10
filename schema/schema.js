const graphQL = require("graphql");
const { GraphQLSchema } = graphQL;
const RootQueryType = require("./root_query_type");
const mutations = require('./mutations');


module.exports = new GraphQLSchema({
    query: RootQueryType,
    mutation: mutations
});

