import {ApolloServer, gql} from 'apollo-server';

const books = [
    {
        title: 'First Book',
        author: 'Json Liang'
    },
    {
        title: 'Jupter Book',
        author: 'Michael Crichton'
    }
];

const typeDefs = gql`
    type Book {
        title: String
        author: String
    }
    type Query {
        books: [Book]
    }
`;

const resolvers = {
    Query: {
        books: () => books
    },
}

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.listen().then(({url})=>{
    console.log(`Server ready at ${url}`);
});