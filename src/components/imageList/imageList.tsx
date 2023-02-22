import * as React from 'react';
import {ImageListItem, ImageList} from '@mui/material';

const itemData = [
  {
    img: "./assets/jpg2.jpg",
    title: 'Review Code Meme',
  },
  {
    img: "./assets/gif.gif",
    title: 'This is fine',
  },
  {
    img: "./assets/jpeg.jpg",
    title: 'Cookies JPEG Meme',
  },
    {
    img: "./assets/png.png",
    title: 'Meme about coding',
  },
  {
    img: "./assets/jpg.jpg",
    title: 'Ross',
  },
];

export default function WovenImageList() {
  return (
    <ImageList sx={{ width: "100%", height: 600 }} variant='masonry' cols={2} gap={4}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

