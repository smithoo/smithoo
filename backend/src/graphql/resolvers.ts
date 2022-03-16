import dao from '../dao';

const resolvers = {
    posts: async () => {
        return await dao.posts.getAllPosts();
    },
    createPost: async (args) => {
        return await dao.posts.createPost(args);
    },
    books: async () => {
        return await dao.books.getAllBooks();
    },
    book: async ({ id }: { id: string }) => {
        return await dao.books.findBook(id);
    },
};

export default resolvers;
