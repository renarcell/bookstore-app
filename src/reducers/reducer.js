
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
		case "ADD_BOOK_TO_CART": {
			const id = action.payload;
			const book = store.books.find(item => id === item.id);
			const findedItem = store.cartBooks.find(item => id === item.id);
			if (findedItem) {
				const { id, count, price } = findedItem;
				const newCount = count + 1;
				return {
					...store,
					cartBooks: store.cartBooks.map((item) => {
							if (item.id === id) {
								return {
									...item,
									count: newCount, 
									total: price*newCount,
								}
							}
							return {...item};
					})
				}
			} 
			return {
				...store,
				cartBooks: [
					...store.cartBooks,
					{
						id: book.id,
						title: book.title, 
						count: 1, 
						price: book.price,
						total: book.price,
					}
				]
			}
		}
		case "INCREASE_COUNT_IN_CART": {
			const id = action.payload;
			const findedItem = store.cartBooks.find(item => id === item.id);
			const { count, price } = findedItem;
			return {
				...store,
				cartBooks: store.cartBooks.map((item) => {
					const newCount = count + 1;
					if (item.id === id) {
						return {
							...item,
							count: newCount, 
							total: price*newCount,
						}
					}
					return {...item}
				})
			}
		}

		case "DECREASE_COUNT_IN_CART": {
			const id = action.payload;
			const findedItem = store.cartBooks.find(item => id === item.id);
			const { count, price } = findedItem;
			return {
				...store,
				cartBooks: store.cartBooks.map((item) => {
					const newCount = count - 1;
					if (item.id === id) {
						return {
							...item,
							count: newCount, 
							total: price*newCount,
						}
					}
					return {...item}
				})
			}
		}

		case "DELETE_BOOK_IN_CART": {
			const id = action.payload;
			return {
				...store,
				cartBooks: store.cartBooks.filter((item) => item.id !== id)
			}
		}

        default:
            return store;
    }
}