import CustomContainer from "@/components/custom-container";
import Image from "next/image";

type IndicatorCardProps = {
    name: string;
}

export default function IndicatorCard({ name }: IndicatorCardProps) {
    return (
        <div className="relative">
             <CustomContainer
                width="w-[227px]"
                height="h-[128px]"
                padding="p-6"
        >
                <span className="font-normal text-[14px] leading-[16px]">
                    {name}
                </span>
                <p className="font-bold text-[24px] leading-[32px] my-[8px]">
                    R$ 320,50
                </p>
                <span className="font-normal text-[14px] leading-[16px] text-[#00DC04]">
                    +12% no período
                </span>
                <Image
                    className="absolute bottom-0 right-2"
                    src={"/arrowup.svg"}
                    alt="ícone de seta"
                    height={0}
                    width={0}
                    style={{
                        width: '87px',
                        height: '68px'
                    }}
                    priority
                />
            </CustomContainer>
        </div>
    );
}