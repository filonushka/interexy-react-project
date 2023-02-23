import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import {
    getCharacters,
    // getCharacterById,
    ICharacterData,
} from "../../api/characterApi/index";

type IInitialState = {
    characters: ICharacterData[];
    chosenCharacter: ICharacterData | undefined;
    fetchingStatus: 'loading' | 'loaded' | 'error',
};

const initialState = {
    characters: [],
    chosenCharacter: undefined,
    fetchingStatus: "loading",
} as IInitialState;

export const fetchCharacters = createAsyncThunk<ICharacterData[]>(
    "characters/fetchCharacters",
    async () => {
        return (await getCharacters()) as ICharacterData[];
    }
);

const charactersSlice = createSlice({
  name: "characters", 
  initialState, 
  reducers: {
  }, 
  extraReducers: (builder) => {
        builder
            .addCase(fetchCharacters.pending, (state) => {
                state.fetchingStatus = "loading";
                state.characters = [];

            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.fetchingStatus = "loaded";
                state.characters = action.payload;
            })
            .addCase(fetchCharacters.rejected, (state) => {
                state.fetchingStatus = "error";
                state.characters = [];

            });
        }
});


export const charactersReducer = charactersSlice.reducer;