import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions, Avatar, Link, Chip } from '@mui/material';

export interface ICharacterData {
    id: number;
    name: string;
    image: string;
    gender: string;
    species: string;
    status: string;
}

export  function CharacterCard({ name, image, gender, species, status, id }: ICharacterData) {
  return (
    <Card   key={id} sx={{ maxWidth: 345 }}>
     <Avatar alt={name} src={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {gender}
          </Typography>
          <Chip
            label={status}
            color={status === "Alive" ? "secondary" : "primary"}
          />
        </CardContent>
        <CardActions>
          <Link component="button" variant="body2">
            Read more
          </Link>
        </CardActions>
    </Card>
  );
}