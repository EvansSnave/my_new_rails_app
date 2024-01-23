import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getGreetings = createAsyncThunk('greeting/getGreetings',
  async () => {
    const data = await fetch('/api/v1/greeting_random');
    const response = await data.json();
    return response;
  },
);

const initialState = {
  greeting: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGreetings.fulfilled, (state, action) => {
      state.greeting = action.payload.greeting;
    });
  },
});

export default greetingSlice.reducer;
