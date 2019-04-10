const { ApolloServer, gql } = require('apollo-server')
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')

const filepath = path.join(__dirname, 'typeDefs.gql')
const typeDefs = fs.readFileSync(filepath, 'utf-8')
const resolvers = require('./resolvers')

require('dotenv').config({path: 'variables.env'})

const User = require('./models/User')
const Post = require('./models/Post')

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('DB Connected'))
.catch(err => console.error(err))


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
        User,
        Post
    }
}) 

server.listen().then(({ url }) => {
    console.log(`server listening on ${ url }`)
})