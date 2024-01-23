import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getGreetings = createAsyncThunk(
  'greeting/getGreetings',
  async () => {
    const data = await fetch('/');
  },
);

const initialState = {
  greeting: '',
};

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
});

export default greetingSlice.reducer;
