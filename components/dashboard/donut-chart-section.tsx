import DonutChart from "../charts/donut-chart";
import CustomContainer from "../custom-container";
import TextButton from "../text-button";

export default function DonutChartSection() {
    return (
        <CustomContainer padding="p-[40px]" width="w-[478px]">
            <span className="font-bold text-[20px] leading-[32px]">
                Mapa de impacto por segmento
            </span>
            <div className="flex flex-col gap-[32px] items-center mt-[32px]">
                <DonutChart />
                <TextButton
                    label="Analisar segmentos"
                    backgroundColor="#1876D2"
                />
            </div>
        </CustomContainer>
    );
}