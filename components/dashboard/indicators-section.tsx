import ActiveWorkflowsSection from "./active-workflows-section";
import SegmentsSection from "./segments-section";
import IndicatorCard from "./indicator-card";
import { useSelector } from "react-redux";
import { RootState } from "../provider/store";

export default function IndicatorsSection() {
    const kpis = useSelector((state: RootState) => state.dashboard.kpis);

    if (!kpis) return null;

    return (
        <div className="flex flex-col gap-6 ml-[40px]">
            <div className="flex gap-6">
                <IndicatorCard
                    type={"arpu"}
                    name="ARPU"
                    value={kpis.arpu}
                    percentual={12}
                />
                <IndicatorCard
                    type={"conversion"}
                    name="Conversão IA"
                    value={kpis.conversion}
                    percentual={12}
                />
            </div>
            <div className="flex gap-6">
                <IndicatorCard
                    type={"retention"}
                    name="Retenção"
                    value={kpis.retention}
                    percentual={12}
                />
                <IndicatorCard
                    type={"churn"}
                    name="Taxa de Churn"
                    value={kpis.churn}
                    percentual={-1.5}
                />
            </div>
            <SegmentsSection />
            <ActiveWorkflowsSection />
        </div>
    );
}