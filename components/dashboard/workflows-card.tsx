import Image from "next/image";
import CustomContainer from "../custom-container";

type WorkflowsCardProps = {
    title: string;
    conversionValue: number;
    roiValue: number
}

export default function WorkflowsCard({
    title,
    conversionValue,
    roiValue
}: WorkflowsCardProps) {
    return (
        <CustomContainer padding="p-6">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-[8px]">
                    <span className="font-bold text-[20px] leading-[16px]">
                        {title}
                    </span>
                    <div className="flex gap-6">
                        <div>
                            <span className="font-normal text-[14px] leading-[16px]">
                                Conversão:&nbsp;
                            </span>
                            <span className="font-normal text-[14px] leading-[16px] text-[#00DC04]">
                                {`${conversionValue}%`}
                            </span>
                        </div>
                        <div>
                            <span className="font-normal text-[14px] leading-[16px]">
                                ROI:&nbsp;
                            </span>
                            <span className="font-normal text-[14px] leading-[16px] text-[#00DC04]">
                                 {`${roiValue}%`}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[16px]">
                    <Image
                        src="/blue_graphic.svg"
                        alt="ícone de gráfico"
                        width={0}
                        height={0}
                        style={{
                            width: '24px',
                            height: '24px'
                        }}
                        priority
                    />
                    <Image
                        src="/copy.svg"
                        alt="ícone de papéis sobrepostos"
                        width={0}
                        height={0}
                        style={{
                            width: '24px',
                            height: '24px'
                        }}
                        priority
                    />
                </div>
            </div>
        </CustomContainer>
    );
}