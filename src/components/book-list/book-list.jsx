import React, { useEffect } from 'react';
import BookListItem from '../book-list-item/book-list-item';
import { compose } from "redux";
import { connect } from 'react-redux';
import { fetchBooks, addBookToCart } from '../../actions/actions';
import { withBookstoreService } from '../../hoc-helpers';
import Spinner from '../spinner/spinner';
import ErrorIndicator from '../error-indicator/error-indicator';
import './book-list.css';

function BookList({books, loading, error, addBookToCart, fetchBooks}) {
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

	return (
		<ul className="book-list">
			{
				books.map((book) => {
				  return (
					<BookListItem key={book.id} book={book} addBookToCart={addBookToCart}/>
				  )
				})
			}
		</ul>
	);
};

const mapMethodsToProps = (service) => {
	return {
		getBooks: service.getBooks,
	}
}

const mapStateToProps = (state) => {
	return {
		books: state.books,
		loading: state.loading,
		error: state.error,
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		fetchBooks: fetchBooks(dispatch, props.bookstoreService),
		addBookToCart: (item) => dispatch(addBookToCart(item)),
	};
}

export default compose(
	withBookstoreService(),
	connect(mapStateToProps, mapDispatchToProps),
)(BookList);


