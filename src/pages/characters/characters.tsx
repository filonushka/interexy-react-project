import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../../src/api/characterApi";
import { CharacterCard } from "../../components/сard/card";
import { ICharacterData } from "../../api/characterApi/index";
import store from "../../store/store";

import { Grid, Pagination } from "@mui/material";
import SearchCharacter from "../../components/searchCharacter/searchCharacter";

function Characters() {
  const [cards, setCardsData] = useState([]);

  const { characters } = useSelector((store: any) => store.characters);
  // const dispatch = useDispatch();
  console.log(characters);

  useEffect(() => {
    getCharacters().then((res: any) => setCardsData(res.results));
  }, []);

  const memoCards = useMemo(() => {
    return (
      <Grid
        container
        spacing={2}
        p={1}
        sx={{
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          mt: 3,
        }}
      >
        <Grid item sx={{ alignItems: "center" }}>
          <SearchCharacter />
        </Grid>
        <Grid
          item
          container
          spacing={2}
          p={1}
          sx={{ justifyContent: "center", mt: 3 }}
        >
          {cards.map((card: ICharacterData) => (
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
        <Grid item sx={{ alignItems: "center", marginBottom: "10px" }}>
          <Pagination />
        </Grid>
      </Grid>
    );
  }, [cards]);

  return <div>{cards.length ? memoCards : "Cards are loading..."}</div>;
}

export default Characters;
