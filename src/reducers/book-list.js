const updateBookList = (store, action) => {
	if (store === undefined) {
		return {
			books: [],
			loading: true,
			error: null,
		}
	}
	const { bookList } = store;

    switch(action.type) {
		case "FETCH_BOOKS_REQUEST":
			return {
				...bookList, 
				loading: true,
			};
		case "FETCH_BOOKS_SUCCESS":
			return {
				...bookList, 
				books: action.payload,
				loading: false,
			};

		case "FETCH_BOOKS_FAILURE": {
			return {
				...bookList, 
				loading: false,
				error: action.payload.message,
			};
		}

		default:
			return bookList;
	}
};

export default updateBookList;
