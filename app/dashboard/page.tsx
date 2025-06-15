import DonutChart from "@/components/charts/donut-chart";
import ActiveOffersSection from "@/components/dashboard/active-offers-section";
import DonutChartSection from "@/components/dashboard/donut-chart-section";
import IndicatorCard from "@/components/dashboard/indicator-card";
import KpiSection from "@/components/dashboard/kpi-section";

export default function Dashboard() {
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
                </div>
            </div>
        </div>
    );
}