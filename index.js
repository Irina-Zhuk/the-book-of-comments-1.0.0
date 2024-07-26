const  {ApolloServer} = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./qraphql/resolvers');

const MONGODB = "mongodb+srv://irinamzh:6NwZgog4mlBew2mc@cluster0.lvzg3fs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const server = new ApolloServer({
  typeDefs,
  resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
      console.log("MongoDB Connection successful");
      return server.listen({port: 5000})
    })
    .then((res) => {
      console.log(`Server running at ${res.url}`);
    })
