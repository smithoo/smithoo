import dao from './../dao';

const resolver = {
    posts: async () => {
        return await dao.posts.getAllPosts();
    },
    createPost: async (args) => {
        return await dao.posts.createPost(args);
    },
};

export default resolver;
