import { Client } from '@/api/types/client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface VisionPageState {
  client: Client | null;
}

const initialState: VisionPageState = {
  client: null,
};

const visionSlice = createSlice({
  name: 'vision',
  initialState,
  reducers: {
    setClient(state, action: PayloadAction<Client>) {
      state.client = action.payload;
    },

  },
});

export const { setClient } = visionSlice.actions;
export default visionSlice.reducer;