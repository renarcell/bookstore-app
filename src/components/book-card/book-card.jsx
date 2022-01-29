import React from 'react';
import './book-card.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BookCard({title, author}) {
  return (
	  <div className="book-card">
		<Card sx={{ position:"relative",width: 345, height: 350 }}>
		<CardMedia
			component="img"
			height="140"
			image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
			alt="green iguana"
		/>
		<CardContent>
			<Typography gutterBottom variant="h6" component="div">
			{title}
			</Typography>
			<Typography variant="body2" color="text.secondary">
			{ author }
			</Typography>
		</CardContent>
		<CardActions sx={{position: "absolute",justifyContent: "space-between", bottom: 0}}>
			<Button size="small">More</Button>
			<Button size="small">Add to cart</Button>
		</CardActions>
		</Card>
	  </div>

  );
}