// connect to firestore or firebase real time database
const books = [
    {
        id: 'a',
        title: 'Book 1',
    },
    {
        id: 'b',
        title: 'Book 2',
    },
    {
        id: 'c',
        title: 'Book 3',
    },
];

async function findBook(id: string) {
    return books.find((b) => b.id === id);
}

async function getAllBooks() {
    return Promise.resolve(books);
}

export default {
    findBook,
    getAllBooks,
};
