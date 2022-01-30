import React from 'react';
import './book-list-item.css';
import BookCard from '../book-card/book-card';

export default function BookListItem({book, addBookToCart}) {
	return (
		<li className="book-list-item" key={book.id}>
			<BookCard {...book} addBookToCart={() => addBookToCart(book)}/>
		</li>
	);
};
