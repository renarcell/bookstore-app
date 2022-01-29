import './cart-table.css';

import React from 'react';
import { connect } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function CartTable({ cartBooks }) {
	function CartTableRow({ name, count, price, actions }, idx) {
		return (
		<TableRow
		key={ idx }
		sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
			<TableCell component="th" scope="row">{ idx + 1 }</TableCell>
			<TableCell align="left">{ name }</TableCell>
			<TableCell align="right">{ count }</TableCell>
			<TableCell align="right">{ price }</TableCell>
			<TableCell align="right">{ actions }</TableCell>
		  </TableRow>
		);
	}

	return (
		<TableContainer component={Paper}>
		<Table sx={{ minWidth: 650 }} aria-label="simple table">
			<TableHead>
			<TableRow>
				<TableCell>#</TableCell>
				<TableCell align="left">Item</TableCell>
				<TableCell align="right">Count</TableCell>
				<TableCell align="right">Price</TableCell>
				<TableCell align="right">Actions</TableCell>
			</TableRow>
			</TableHead>
			<TableBody>
			{cartBooks.map(CartTableRow)}
			</TableBody>
		</Table>
		</TableContainer>
  );
}

const mapStateToProps = ({cartBooks}) => {
	return {
		cartBooks,
	}
}


export default connect(mapStateToProps)(CartTable);