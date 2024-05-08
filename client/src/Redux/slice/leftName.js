import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const leftNameSlice = createSlice({
  name: 'leftName',
  initialState,
  reducers: {
    setLeftName: (state, action) => {
      // Use concat or spread operator to add the payload to the value array
      state.value = state.value.concat(action.payload);
    },
    removeLeftName: (state, action) => {
      // Use filter to remove all occurrences of names in the payload array
      state.value = state.value.filter(name => !action.payload.includes(name));
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLeftName, removeLeftName } = leftNameSlice.actions;

export default leftNameSlice.reducer;
