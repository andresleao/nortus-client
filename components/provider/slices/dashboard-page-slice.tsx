import { KpisResponse } from '@/api/types/kpis-response';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type KpisType = "arpu" | "churn" | "conversion" | "retention";

interface DashboardPageState {
  kpis: KpisResponse | null;
  selectedKpis: number[] | null;
  selectedKpisType: KpisType;
}

const initialState: DashboardPageState = {
    kpis: null,
    selectedKpis: null,
    selectedKpisType: "arpu"
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setKpis(state, action: PayloadAction<KpisResponse>) {
      state.kpis = action.payload;
    },
    setSelectedKpis(state, action: PayloadAction<number[]>) {
      state.selectedKpis = action.payload;
    },
    setSelectedKpisType(state, action: PayloadAction<KpisType>) {
      state.selectedKpisType = action.payload;
    }
  },
});

export const { setKpis, setSelectedKpis, setSelectedKpisType } = dashboardSlice.actions;
export default dashboardSlice.reducer;