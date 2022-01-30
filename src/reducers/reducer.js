
function createData(title, count, price, actions) {
	return { title, count, price, actions };
  }
const initialStore = {
    books: [],
	cartBooks: [],
	loading: true,
	error: null,
}

export default function reducer(store = initialStore, action) {
    switch(action.type) {
		case "FETCH_BOOKS_REQUEST":
			return {
				...store, 
				loading: true,
			};
		case "FETCH_BOOKS_SUCCESS":
			return {
				...store, 
				books: action.payload,
				loading: false,
			};

		case "FETCH_BOOKS_FAILURE":
			return {
				...store, 
				loading: false,
				error: action.payload.message,
			};
		case "ADD_BOOK_TO_CART":
			const { id, price } = action.payload;
			if (store.cartBooks.find(book => id === book.id)) {
				return {
					...store, 
					cartBooks: store.cartBooks.map(book => {
						if (id === book.id) {
							return {...book, count: book.count + 1, price: book.price + price};
						} else {
							return {...book};
						}
						
					}),
				};
			}
			return {
				...store, 
				cartBooks: [...store.cartBooks, {...action.payload, count: 1}]
			};

        default:
            return store;
    }
}