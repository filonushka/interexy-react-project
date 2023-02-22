import * as React from 'react';
import { useEffect, useState } from 'react';
import {TextField,Autocomplete} from '@mui/material';
import { getCharacter } from "../../../src/api/characterApi";
import {ICharacterData } from "../../components/сard/card"


export default function SearchCharacter() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacter().then((res) => setCharacters(res.results));
  }, []);

  const [value, setValue] = useState('test');

   function changeSelect(e: any) {
      setValue(e.target.value);
   }

   console.log(value, "value");

  return (    
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={characters.map((character: ICharacterData) => character.name)}
        onChange= {changeSelect}

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
