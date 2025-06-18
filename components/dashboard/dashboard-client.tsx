'use client';
export const dynamic = "force-static";

import { getKpis, getOffers, getSegments } from "@/api/api";
import ActiveOffersSection from "@/components/dashboard/active-offers-section";
import KpiSection from "@/components/dashboard/kpi-section";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppSpinner } from "../app-spinner";
import { setKpis, setOffers, setSegments, setSelectedKpis } from "../provider/slices/dashboard-page-slice";
import IndicatorsSection from "./indicators-section";

export default function DashboardClient() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            const kpisData = await getKpis();
            const offersData = await getOffers();
            const segmentsData = await getSegments();

            if (kpisData) {
                dispatch(setKpis(kpisData));
                dispatch(setSelectedKpis(kpisData.arpuTrend));
            }

            if (offersData) {
                dispatch(setOffers(offersData));
            }

            if (segmentsData) {
                dispatch(setSegments(segmentsData));
            }

            setIsLoading(false);

        };
        fetchData();
    }, [dispatch]);

    if (isLoading) {
        return <AppSpinner fullScreen />
    }

    return (
        <div className="mt-[--header-height] pt-[47px] flex flex-col items-center w-full mb-[40px] m-auto ml-[48px]">
            <div className="flex flex-col 2xl:flex-row">
                <div className="flex flex-col items-center 2xl:items-start">
                    <KpiSection />
                    <ActiveOffersSection />
                </div>
                <IndicatorsSection />
            </div>
        </div>
    );
}