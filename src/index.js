import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { Provider } from 'react-redux';
import ErrorBoundry from './components/error-boundry/error-boundry';
import { BookstoreServiceProvider } from './components/bookstore-service-context';
import BookstoreService from './services/bookstore-service';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store';

const bookstoreService = new BookstoreService();

const main = (
	<Provider store={store}>
		<ErrorBoundry>
			<BookstoreServiceProvider value={bookstoreService}>
				<BrowserRouter>
					<App/>
				</BrowserRouter>
			</BookstoreServiceProvider>
		</ErrorBoundry>
	</Provider>
);

ReactDOM.render(main, document.getElementById('root'));
