import CustomContainer from "@/components/custom-container";
import RadialChartDisplay from "./radial-chart-display";

export default function ClassificationSection() {
    return (
        <CustomContainer
            width="w-[965px]"
            height="h-[320px]"
            padding="p-6"
        >
            <span className="font-bold text-[20px] leading-[32px]">
                Classificação inteligente
            </span>
            <RadialChartDisplay />
        </CustomContainer>
    );
}