import { useState, useEffect, useMemo } from "react";
import { getCharacter } from "../../../src/api/characterApi";
import { CharacterCard, ICharacterData } from "../../components/сard/card"

import React from 'react'
import { Grid } from "@mui/material";

function Characters() {
  const [cards, setCardsData] = useState([]);

  useEffect(() => {
    getCharacter().then((res) => setCardsData(res.results));
  }, []);
  console.log(cards);

  const memoCards = useMemo(() => {
    return (
         <Grid
            container
            spacing={2}
            p={1}
            sx={{ justifyContent: "center", mt: 3 }}
        >

        {cards.map((card : ICharacterData ) => (
          <p>
            <CharacterCard           
              name={card.name}
              image={card.image}
              gender={card.gender}
              species={card.species}
              status={card.status}
              id={card.id}
              ></CharacterCard>
          </p>
        ))}
        </Grid>
    );
  }, [cards]);

  return <div>{cards.length ? memoCards : "Cards are loading..."}</div>;
}


export default Characters 