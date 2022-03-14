// connect to firestore or firebase real time database

async function createPost({ title, contents, author }) {
    console.log(title, contents, author);
    return Promise.resolve(true);
}

async function getAllPosts() {
    return Promise.resolve([
        {
            title: 'Post 1',
            contents: 'hello world',
            author: 'smithoo',
        },
        {
            title: 'Post 2',
            contents: 'hello world',
            author: 'smithoo',
        },
        {
            title: 'Post 3',
            contents: 'hello world',
            author: 'smithoo',
        },
    ]);
}

export default {
    createPost,
    getAllPosts,
};
