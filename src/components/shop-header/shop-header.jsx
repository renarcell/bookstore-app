import React from 'react';
import './shop-header.css';
import { NavLink, Link } from 'react-router-dom';
import logo from './logo.png';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

export default function ShopHeader(props) {
	return (
		<header className="shop-header">
			<AppBar position="static" color="inherit">
				<Box sx={{display: "flex",justifyContent: "space-around",alignItems: "center",padding: "8px"}}>
					<Link to="/"><img className="logo" alt="logo" src={logo}/></Link>
					<ul className="header-menu">
						<li className="header-menu-item"><NavLink to="/">Home page</NavLink></li>
						<li className="header-menu-item"><NavLink to="/cart-page">Cart page</NavLink></li>
						<li className="header-menu-item"><NavLink to="/secret-page">Secret page</NavLink></li>
					</ul>
					<div className="cart-amount">
						<FontAwesomeIcon className="icon" icon={faShoppingCart} />
						<div className="desc">5 items($200)</div>
					</div>
				</Box>

			</AppBar>
		</header>
	);
};
