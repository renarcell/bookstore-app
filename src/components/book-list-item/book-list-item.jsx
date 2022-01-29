import React from 'react';
import './book-list-item.css';
import BookCard from '../book-card/book-card';

export default function BookListItem({ book }) {
	const { id, title, author } = book;
	return (
		<li className="book-list-item" key={id}>
			<BookCard title={title} author={author}/>
		</li>
	);
};
