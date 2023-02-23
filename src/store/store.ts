import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from "react-redux";
import { charactersReducer } from '../redux/slicers/charactersSlice';


const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store