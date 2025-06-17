import CustomContainer from "@/components/custom-container";
import RadialChartDisplay from "./radial-chart-display";
import ExpansionScoreBar from "@/components/charts/score-bar";

export default function ClassificationSection() {
    return (
        <CustomContainer
            width="w-[965px] max-w-[965px] classification-xxl-w"
            padding="p-6"
        >
            <div className="flex flex-col w-full">
                 <span className="font-bold text-[20px] leading-[32px]">
                    Classificação inteligente
                </span>
                <div className="flex xxl-row mt-6 gap-6 w-full">
                    <RadialChartDisplay />
                    <div className="flex flex-1 flex-col gap-y-6 w-full">
                        <ExpansionScoreBar label="Score de expansão" scorePercentual={95} />
                        <ExpansionScoreBar label="Score de retenção" scorePercentual={50} />
                    </div>
                </div>
            </div>
        </CustomContainer>
    );
}