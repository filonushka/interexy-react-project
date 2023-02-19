import { useState, useEffect, useMemo } from "react";
import { getCharacter } from "../../../src/api/characterApi";
import { CharacterCard, ICharacterData } from "../../components/сard/card"

import React from 'react'

function Characters() {
  const [cards, setCardsData] = useState([]);

  useEffect(() => {
    getCharacter().then((res) => setCardsData(res.results));
  }, []);
  console.log(cards);

  const memoCards = useMemo(() => {
    return (
      <div> 
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
 </div>
    );
  }, [cards]);

  return <div>{cards.length ? memoCards : "Cards are loading..."}</div>;
}


export default Characters 