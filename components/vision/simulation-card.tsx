import CustomContainer from "../custom-container";
import TextButton from "../text-button";

type SimulationCardProps = {
    title: string,
    description: string,
    price: string,
    backgroundColor?: string,
    buttonBgColor?: string,
    buttonBorderColor?: string
}

export default function SimulationCard({
    title,
    description,
    price,
    backgroundColor = "bg-white/5",
    buttonBgColor,
    buttonBorderColor,
}: SimulationCardProps) {
    return (
       <CustomContainer
            width="w-[312px]"
            height="h-[256px]"
            padding="px-6 pt-6 pb-[48px]"
            backgroundColor={backgroundColor}
        >
            <div className="flex flex-col h-full justify-between">
                <div>
                    <span className="font-bold text-[20px] leading-[32px]">
                        {title}
                    </span>
                    <p className="font-normal text-[14px] leading-[16px] mt-[8px]">
                        {description}
                    </p>
                </div>
                <div className="flex justify-between">
                    <div className="flex flex-col gap-y-[8px]">
                        <span className="font-semibold text-[12px] leading-[16px]">
                            Por apenas:
                        </span>
                        <span className="font-semibold text-[20px] leading-[16px]">
                            {price}
                        </span>
                    </div>
                    <TextButton
                        label="Simular"
                        backgroundColor={buttonBgColor}
                        borderColor={buttonBorderColor}
                    />
                </div>
            </div>
       </CustomContainer>
    );
}