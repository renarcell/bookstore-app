function updateCartItem(array, id, quantity) {
	return array.reduce((acc, item) => {
		const { count, price } = item;
		const newCount = count + quantity;
		if (item.id === id) {
			if (newCount <= 0) {
				return acc;
			}
			acc.push({
				...item,
				count: newCount, 
				total: price*newCount,
			});
		}
		else {
			acc.push({...item});
		}
		return acc;
	}, [])
}

function updateCheckoutPrice(cartBooks) {
	cartBooks.reduce((acc, item) => (acc + item.total));
}


function updateCartBooks({cartList, bookList}, bookId, quantity = 0) {
	const findedItem = cartList.cartBooks.find(item => bookId === item.id);
	let newArray;
	if (!findedItem) {
		const book = bookList.books.find(item => bookId === item.id);
		newArray = {
			...cartList,
			cartBooks: [
				...cartList.cartBooks,
				{
					id: book.id,
					title: book.title, 
					count: 1, 
					price: book.price,
					total: book.price,
				}
			]
		}
	} else {
		newArray = {
			...cartList,
			cartBooks: updateCartItem(cartList.cartBooks, bookId, quantity),
		}
	}

	return newArray;
}

const updateShopingCart = (store, action) => {
	if (store === undefined) {
		return {
			cartBooks: [],
		}
	}

	switch(action.type) {
		case "ADD_BOOK_TO_CART": {
			const id = action.payload;
			return updateCartBooks(store, id, +1);
		}

		case "INCREASE_COUNT_IN_CART": {
			const id = action.payload;
			return updateCartBooks(store, id, +1);
		}

		case "DECREASE_COUNT_IN_CART": {
			const id = action.payload;
			return updateCartBooks(store, id, -1);
		}

		case "DELETE_BOOK_IN_CART": {
			const id = action.payload;
			const findedItem = store.cartList.cartBooks.find(item => id === item.id);
			return updateCartBooks(store, id, -findedItem.count);
		}

        default:
            return store.cartList;
	}
};

export default updateShopingCart;