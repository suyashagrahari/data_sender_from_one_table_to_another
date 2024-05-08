import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const rightNameSlice = createSlice({
  name: 'rightName',
  initialState,
  reducers: {
    setRightName: (state, action) => {
      // Use concat or spread operator to add the payload to the value array
      state.value = state.value.concat(action.payload);
    },
    removeRightName: (state, action) => {
      // Use filter to remove the payload from the value array
      state.value = state.value.filter(name => !action.payload.includes(name));
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRightName, removeRightName } = rightNameSlice.actions

export default rightNameSlice.reducer;
