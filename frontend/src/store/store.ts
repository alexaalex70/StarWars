import { configureStore } from '@reduxjs/toolkit'
import { speciesInfoReducer } from './slices';

export const store = configureStore({
    reducer: {
      species: speciesInfoReducer
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch