import React from 'react';
import { connect } from 'react-redux';
import './book-card.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BookCard({ id, image, title, author, price, addBookToCart }) {
  return (
	  <div className="book-card">
		<Card sx={{ position:"relative",width: 345, height: 350 }}>
		<CardMedia
			component="img"
			height="170"
			image={image}
			alt="green iguana"
			sx={{objectFit: "contain", margin: "5px", img:{borderRadius: "8px"}}}
		/>
		<CardContent>
			<Typography gutterBottom variant="h7" component="div">
				{title}
			</Typography>
			<Typography variant="body2" color="text.secondary">
				{ author }
			</Typography>
			<Typography variant="h5" color="text.primary">
				${ price }
			</Typography>
		</CardContent>
		<CardActions sx={{position: "absolute",justifyContent: "space-between", bottom: 0}}>
			<Button size="small">More</Button>
			<Button size="small" onClick={addBookToCart}>Add to cart</Button>
		</CardActions>
		</Card>
	  </div>

  );
}