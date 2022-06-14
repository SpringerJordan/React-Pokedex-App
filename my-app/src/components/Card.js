import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
            component="img"
            height="240"
            //image="/static/images/cards/contemplative-reptile.jpg"
            //image="./stockImages/Pikachu.jpg"
            image={require('../stockImages/Pikachu.jpg')}
            alt="Pikachu"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            Name : Pickachu Type : Electric
          </Typography>
          
          <Typography variant="body2" color="text.secondary">
            This is example text
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
