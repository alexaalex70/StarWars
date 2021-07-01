import { configureStore } from '@reduxjs/toolkit'
import { counterReducer, speciesInfoReducer } from './slices';

export const store = configureStore({
    reducer: {
      counter: counterReducer,
      species: speciesInfoReducer
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch