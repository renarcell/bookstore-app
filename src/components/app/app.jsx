import React from 'react';
import Spinner from '../spinner/spinner';
import { Routes, Route } from 'react-router-dom';
import { HomePage, CartPage } from '../pages';
import Container from 'react-bootstrap/Container';
import ShopHeader from '../shop-header/shop-header';

import './app.css';

function App() {
  return (
		<div className="App">
			<Container>
				<ShopHeader/>
				<Routes>
					<Route path="/" element={<HomePage/>}/>
					<Route path="/cart-page" element={<CartPage/>}/>
				</Routes>
			</Container>
		</div>
	);
}

export default App;
