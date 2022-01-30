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
import DeleteIcon from '@mui/icons-material/Delete';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

function CartTable({ cartBooks }) {
	function CartTableRow({ title, count, price }, idx) {
		return (
		<TableRow
		key={ idx }
		sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
			<TableCell component="th" scope="row">{ idx + 1 }</TableCell>
			<TableCell align="left">{ title }</TableCell>
			<TableCell align="right">{ count }</TableCell>
			<TableCell align="right">{ price }</TableCell>
			<TableCell align="right">
				<button className="action-button action-add">
					<AddCircleIcon/>
				</button>
				<button className="action-button action-remove">
					<RemoveCircleIcon/>
				</button>
				<button className="action-button action-delete">
					<DeleteIcon/>
				</button>
			</TableCell>
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