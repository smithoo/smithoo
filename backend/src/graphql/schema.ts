import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        users: [User]
        user(email: String!): User
        posts: [Post]
        books: [Book]
        book(id: String!): Book
    }

    type Mutation {
        createUser(email: String!, pwd: String!): User
        createPost(title: String!, contents: String!, author: String!): Post
    }

    type Book {
        id: String
        title: String
    }

    type User{
        id: String
        email: String
        pwd: String
        c_date: String
    }

    type Post{
        id: String
        title: String
        contents: String
        author: User
        c_date: String
    }
`);

export default schema;
