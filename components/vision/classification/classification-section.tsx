
import CustomContainer from "@/components/custom-container";
import RadialChartDisplay from "./radial-chart-display";
import ExpansionScoreBar from "@/components/charts/score-bar";

export default function ClassificationSection() {
  return (
    <CustomContainer
      width="w-full max-w-[965px]"
      padding="p-6"
    >
      <span className="font-bold text-[20px] leading-[32px] block">
        Classificação inteligente
      </span>

      <div className="mt-6 flex">
        <div className="w-full">
          <RadialChartDisplay />
        </div>

        <div className="flex flex-col w-full gap-6">
          <ExpansionScoreBar
            label="Score de expansão"
            scorePercentual={95}
          />
          <ExpansionScoreBar
            label="Score de retenção"
            scorePercentual={50}
          />
        </div>
      </div>
    </CustomContainer>
  );
}