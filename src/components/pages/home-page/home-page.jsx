import BookList from "../../book-list/book-list";
import CartTable from "../../cart-table/cart-table";

export function HomePage(props) {
	const books = [
		{
			id: 1,
			title: "Harry Potter and the Philosopher's Stone Deluxe Illustrated Slipcase Edition",
			author: "J. K. Rowling",
			url: "https://www.britishbook.ua/detail/harry-potter-and-the-philosopher-s-stone-illustrated-edition_2/",
		},
		{
			id: 2,
			title: "Essential Grammar in Use Fourth Edition with answers",
			author: "Raymond Murphy",
			url: "https://www.britishbook.ua/detail/essential-grammar-in-use-fourth-edition-with-answers/",
		},
		{
			id: 3,
			title: "Insight",
			author: "Fiona Beddall",
			url: "https://www.britishbook.ua/detail/insight-elementary-student-s-book/",
		},
		{
			id: 4,
			title: "The Nightingale",
			author: "Kristin Hannah",
			url: "https://www.britishbook.ua/detail/the-nightingale/",
		},
		{
			id: 5,
			title: "The Little Prince",
			author: "Antoine de Saint-Exupery",
			url: "https://www.britishbook.ua/detail/the-little-prince/",
		},
		{
			id: 6,
			title: "Sapiens. A Brief History of Humankind",
			author: "Yuval Noah Harari",
			url: "https://www.britishbook.ua/detail/sapiens-a-brief-history-of-humankind/",
		},
	]
	return (
		<div className="home-page">
			Home page
			<BookList books={books}/>
			<CartTable/>
		</div>
	);
}