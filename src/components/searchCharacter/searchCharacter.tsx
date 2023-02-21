import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getCharacter } from "../../../src/api/characterApi";
import {ICharacterData } from "../../components/сard/card"
import { useEffect, useState } from 'react';


export default function SearchCharacter() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacter().then((res) => setCharacters(res.results));
  }, []);

  return (    
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={characters.map((character: ICharacterData) => character.name)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Choose the character"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
  );
}
