import { createSlice } from '@reduxjs/toolkit'

interface SpeciesInfoState {
  info: []
}

const initialState: SpeciesInfoState = {
  info: []
}

export const speciesInfoSlice = createSlice({
  name: 'speciesInfo',
  initialState,
  reducers: {
    saveInformation: (state, action) => {
      state.info = action.payload;
    }
  },
})

export const { saveInformation } = speciesInfoSlice.actions

export default speciesInfoSlice.reducer;