// const  {ApolloServer} = require('apollo-server');
// const mongoose = require('mongoose');
// const typeDefs = require('./graphql/typeDefs');
// const resolvers = require('./qraphql/resolvers');
//
// const MONGODB = "mongodb+srv://irinamzh:6NwZgog4mlBew2mc@cluster0.lvzg3fs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//
// const server = new ApolloServer({
//   typeDefs,
//   resolvers
// })
//
// mongoose.connect(MONGODB, {useNewUrlParser: true})
//     .then(() => {
//       console.log("MongoDB Connection successful");
//       return server.listen({port: 5000})
//     })
//     .then((res) => {
//       console.log(`Server running at ${res.url}`);
//     })


const { ApolloServer } = require('apollo-server');
const mongoose= require('mongoose')
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const MONGODB = 'mongodb+srv://irinamzh:6NwZgog4mlBew2mc@cluster0.lvzg3fs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const server =new ApolloServer( {
    typeDefs,
    resolvers
})

const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB);
        console.log('MongoDB connected successfully');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB()
server.listen({port: 5000}).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});












