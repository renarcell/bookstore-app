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

export const addBookToCart = (id) => {
	return {
		type: "ADD_BOOK_TO_CART",
		payload: id,
	};
}

export const increaseCountInCart = (id) => {
	return {
		type: "INCREASE_COUNT_IN_CART",
		payload: id,
	};
}

export const decreaseCountInCart = (id) => {
	return {
		type: "DECREASE_COUNT_IN_CART",
		payload: id,
	};
}

export const deleteBookInCart = (id) => {
	return {
		type: "DELETE_BOOK_IN_CART",
		payload: id,
	};
}


export const fetchBooksOld = (dispatch, bookstoreService) => () => {
	dispatch(fetchBooksRequest());
	bookstoreService.getBooks()
	.then(data => dispatch(fetchBooksSuccess(data))) 
	.catch(err => dispatch(fetchBooksFailure(err)));
};

export const fetchBooks = (bookstoreService) => () => (dispatch) => {
	dispatch(fetchBooksRequest());
	bookstoreService.getBooks()
	.then(data => dispatch(fetchBooksSuccess(data)))
	.catch(err => dispatch(fetchBooksFailure(err)));
};

