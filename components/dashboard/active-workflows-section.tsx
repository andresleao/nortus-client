import CustomContainer from "../custom-container";
import TextButton from "../text-button";
import WorkflowsCard from "./workflows-card";

export default function ActiveWorkflowsSection() {
    return (
        <CustomContainer padding="p-[40px]">
            <span className="font-bold text-[20px] leading-[32px]">
                Workflows inteligentes Ativos
            </span>
            <div className="mt-[32px] flex flex-col gap-[32px] mb-[40px]">
                <WorkflowsCard
                    title="Jornada Novo Cliente"
                    conversionValue={35}
                    roiValue={325}
                />
                <WorkflowsCard
                    title="Assinatura de Plano"
                    conversionValue={18}
                    roiValue={120}
                />
            </div>
            <div className="flex justify-end">
                <TextButton
                    label="Analisar segmentos"
                    backgroundColor="#1876D2"
                />
            </div>
        </CustomContainer>
    );
}