import CustomContainer from "@/components/custom-container";
import RadialChartDisplay from "./radial-chart-display";
import ExpansionScoreBar from "@/components/charts/score-bar";

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
            <div className="flex mt-6 gap-x-6">
                <RadialChartDisplay />
                <div className="flex flex-1 flex-col gap-y-6">
                    <ExpansionScoreBar label="Score de expansão" scorePercentual={95} />
                    <ExpansionScoreBar label="Score de retenção" scorePercentual={50} />
                </div>
            </div>
        </CustomContainer>
    );
}