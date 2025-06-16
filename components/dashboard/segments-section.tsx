import { useSelector } from "react-redux";
import DonutChart from "../charts/donut-chart";
import CustomContainer from "../custom-container";
import TextButton from "../text-button";
import { RootState } from "../provider/store";

export default function SegmentsSection() {
    const segments = useSelector((state: RootState) => state.dashboard.segments);

    if (!segments) return null;

    return (
        <CustomContainer padding="p-[40px]" width="w-[478px]">
            <span className="font-bold text-[20px] leading-[32px]">
                Mapa de impacto por segmento
            </span>
            <div className="flex flex-col gap-[32px] items-center mt-[32px]">
                <DonutChart segments={segments} />
                <TextButton
                    label="Analisar segmentos"
                    backgroundColor="#1876D2"
                />
            </div>
        </CustomContainer>
    );
}