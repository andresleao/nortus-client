import { KpisResponse } from '@/api/types/kpis-response';
import { Offer } from '@/api/types/offer';
import { Segment } from '@/api/types/segment';
import { KpisType } from '@/types/kpis-type';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardPageState {
    kpis: KpisResponse | null;
    selectedKpis: number[] | null;
    selectedKpisType: KpisType;
    offers: Offer[] | null;
    segments: Segment[] | null;
}

const initialState: DashboardPageState = {
    kpis: null,
    selectedKpis: null,
    selectedKpisType: "arpu",
    offers: null,
    segments: null
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
        },
        setOffers(state, action: PayloadAction<Offer[]>) {
            state.offers = action.payload;
        },
        setSegments(state, action: PayloadAction<Segment[]>) {
            state.segments = action.payload;
        }
    },
});

export const {
    setKpis,
    setSelectedKpis,
    setSelectedKpisType,
    setOffers,
    setSegments
} = dashboardSlice.actions;

export default dashboardSlice.reducer;