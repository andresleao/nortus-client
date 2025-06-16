import CustomContainer from "@/components/custom-container";
import { KpisType } from "@/types/kpis-type";
import Image from "next/image";

type IndicatorCardProps = {
    type: KpisType;
    name: string;
    value: number;
    percentual: number;
}

export default function IndicatorCard({
    type,
    name,
    value,
    percentual
}: IndicatorCardProps) {

    const valueDisplay = () => {
        switch (type) {
            case "arpu":
                return `R$ ${value.toFixed(2).replace(".", ",")}`;
            case "churn":
            case "conversion":
                return `${value.toString().replace(".", ",")}%`
            case "retention":
                return `${value}%`
            default:
                return "";
        }
    };

    const percentualColorClass = () => {
        if (percentual >= 0) return "text-[#00DC04]"
        return "text-[#DC3300]";
    };

    const isPositiveIndicator = percentual >= 0;

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
                    {valueDisplay()}
                </p>
                <span className={`font-normal text-[14px] leading-[16px] ${percentualColorClass()}`}>
                    {`${percentual}% no período`}
                </span>
                <Image
                    className="absolute bottom-0 right-2"
                    src={isPositiveIndicator ? "/arrowup.svg": "/arrowdown.svg"}
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