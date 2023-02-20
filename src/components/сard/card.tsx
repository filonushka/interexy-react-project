import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions, Avatar, Link, Chip } from '@mui/material';
import { styled } from "@mui/material/styles";

export interface ICharacterData {
    id: number;
    name: string;
    image: string;
    gender: string;
    species: string;
    status: string;
}

const StyledCard = styled(Card)`
  background-color: #F4F6F7;
  display: flex;
  align-items: center;
  padding: 0 10px;
  margin: 10px;

  .css-1wlk0hk-MuiAvatar-root {
    width: 100px;
    height: 100px;
    margin-left: 10px;
  }

  .css-46bh2p-MuiCardContent-root {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .MuiLink-button{
    color: #000000;
    font-size: 16px;
    text-decoration: none;

    &:hover {
      color: #5B2C6F;
      text-decoration: underline

    }
  }
`;


export  function CharacterCard({ name, image, gender, species, status, id }: ICharacterData) {
  return (
    <StyledCard   key={id} sx={{ width: 500}}>
     <Avatar alt={name} src={image} />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
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
    </StyledCard>
  );
}