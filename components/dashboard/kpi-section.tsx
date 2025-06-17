import SmoothCurveChart from "../charts/smooth-curve-chart";
import CustomContainer from "../custom-container";
import KpiSelection from "./kpi-selection";
import { RootState } from "../provider/store";
import { useSelector } from "react-redux";

export default function KpiSection() {
    const kpis = useSelector((state: RootState) => state.dashboard.kpis);
    const selectedKpis = useSelector((state: RootState) => state.dashboard.selectedKpis);

    if (!kpis || !selectedKpis) return null;

    return (
        <CustomContainer width="2xl:w-[852px] w-[700px]" height="max-h-[376px]">
            <div className="flex justify-between items-center p-6">
                <span className="font-bold text-2xl leading-[16px]">
                    Evolução dos KPI's
                </span>
                <KpiSelection />
            </div>
            <SmoothCurveChart
                values={selectedKpis}
                monthsLabels={kpis.labels}
            />
        </CustomContainer>
    );
}