import ActiveOffersSection from "@/components/dashboard/active-offers-section";
import KpiSection from "@/components/dashboard/kpi-section";

export default function Dashboard() {
    return (
        <div className="mt-[--header-height] pt-[47px] flex flex-col items-center w-full mb-[40px]">
            <KpiSection />
            <ActiveOffersSection />
        </div>
    );
}