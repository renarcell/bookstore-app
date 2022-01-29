
function createData(name, count, price, actions) {
	return { name, count, price, actions };
  }
const initialStore = {
    books: [],
	cartBooks: [
		createData('Frozen yoghurt', 159, 6.0, 24),
		createData('Ice cream sandwich', 237, 9.0, 37),
		createData('Eclair', 262, 16.0, 24),
		createData('Cupcake', 305, 3.7, 67),
		createData('Gingerbread', 356, 16.0, 49),
	  ],
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
			return {
				...store, 
				cartBooks: [...store.cartBooks, action.payload]
			};

        default:
            return store;
    }
}