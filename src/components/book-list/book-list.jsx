import React, { useEffect } from 'react';
import BookCard from '../book-card/book-card';
import { bindActionCreators, compose } from "redux";
import { connect } from 'react-redux';
import { fetchBooks, addBookToCart } from '../../actions/actions';
import { withBookstoreService } from '../../hoc-helpers';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import './book-list.css';

function BookListContainer({ books, loading, error, addBookToCart, fetchBooks }) {
	useEffect(() => {
		fetchBooks();
	}, [ fetchBooks ]);

	if (error) {
		return (
			<ul className="book-list">
				<ErrorIndicator details={error}/>
			</ul>
		);
	}

	if (loading) {
		return (
			<ul className="book-list">
				<Spinner/>
			</ul>
		);
	}
	return <BookList books={books} addBookToCart={addBookToCart}/>;
};

function BookList({ books, addBookToCart }) {
	return (
		<ul className="book-list">
			{
				books.map((book) => {
					return (
						<li className="book-list-item" key={book.id}>
							<BookCard {...book} addBookToCart={() => addBookToCart(book.id)}/>
						</li>
					)
				})
			}
		</ul>
	);
}

const mapMethodsToProps = (service) => {
	return {
		getBooks: service.getBooks,
	}
}

const mapStateToProps = ({bookList: {books, loading, error}}) => {
	return {
		books,
		loading,
		error,
	}
}

const mapDispatchToProps = (dispatch, props) => {

	return bindActionCreators({
		fetchBooks: fetchBooks(props.bookstoreService),
		addBookToCart: addBookToCart,
	}, dispatch);
}

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer);


