import updateBookList from "./book-list";
import updateShopingCart from "./shoping-cart";

const reducer = (store, action) => {
	return {
		bookList: updateBookList(store, action),
		cartList: updateShopingCart(store, action),
	}
}

export default reducer;