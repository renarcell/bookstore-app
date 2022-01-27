const initialStore = {
    books: [],
}

export default function reducer(store = initialStore, action) {
    switch(action.type) {
        case "BOOKS_LOADED":
            return {...store};
        default:
            return store;
    }
}