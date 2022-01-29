const fetchBooksRequest = () => {
	return {
		type: "FETCH_BOOKS_REQUEST",
	}
};

const fetchBooksSuccess = (payload) => {
	return {
		type: "FETCH_BOOKS_SUCCESS",
		payload,
	}
};

const fetchBooksFailure = (error) => {
	return {
		type: "FETCH_BOOKS_FAILURE",
		payload: error,
	}
};

export const addBookToCart = (item) => {
	return {
		type: "ADD_BOOK_TO_CART",
		payload: item,
	};
}

export const fetchBooks = (dispatch, bookstoreService) => () => {
	dispatch(fetchBooksRequest());
	bookstoreService.getBooks()
	.then(data => dispatch(fetchBooksSuccess(data)))
	.catch(err => dispatch(fetchBooksFailure(err)));
};

