import SmoothCurveChart from "../charts/smooth-curve-chart";
import CustomContainer from "../custom-container";
import KpiSelection from "./kpi-selection";

export default function KpiSection() {
    return (
        <CustomContainer width="w-[852px] h-[376px]">
            <div className="flex justify-between items-center p-6">
                <span className="font-bold text-2xl leading-[16px]">
                    Evolução dos KPI's
                </span>
                <KpiSelection />
            </div>
            <SmoothCurveChart />
        </CustomContainer>
    );
}