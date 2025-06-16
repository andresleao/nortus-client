'use client';

import { getKpis } from "@/api/api";
import ActiveOffersSection from "@/components/dashboard/active-offers-section";
import ActiveWorkflowsSection from "@/components/dashboard/active-workflows-section";
import DonutChartSection from "@/components/dashboard/donut-chart-section";
import IndicatorCard from "@/components/dashboard/indicator-card";
import KpiSection from "@/components/dashboard/kpi-section";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AppSpinner } from "../app-spinner";
import { setKpis, setSelectedKpis } from "../provider/slices/dashboard-page-slice";

export default function DashboardClient() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = await getKpis();

            if (data) {
                dispatch(setKpis(data));
                dispatch(setSelectedKpis(data.arpuTrend))
                console.log(data);
            }
            setIsLoading(false);

        };
        fetchData();
    }, [dispatch]);

    if (isLoading) {
        return <AppSpinner fullScreen />
    }

    return (
        <div className="mt-[--header-height] pt-[47px] flex flex-col items-center w-full mb-[40px]">
            <div className="flex">
                <div className="flex flex-col">
                    <KpiSection />
                    <ActiveOffersSection />
                </div>
                <div className="flex flex-col gap-6 ml-[40px]">
                   <div className="flex gap-6">
                        <IndicatorCard name="ARPU" />
                        <IndicatorCard name="Conversão IA" />
                   </div>
                   <div className="flex gap-6">
                        <IndicatorCard name="Retenção" />
                        <IndicatorCard name="Taxa de Churn" />
                   </div>
                    <DonutChartSection />
                    <ActiveWorkflowsSection />
                </div>
            </div>
        </div>
    );
}