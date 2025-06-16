import CustomContainer from "../custom-container";
import TextButton from "../text-button";

type SimulationCardProps = {
  title: string;
  description: string;
  price: string;
  backgroundColor?: string;
  buttonBgColor?: string;
  buttonBorderColor?: string;
};

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
      width="w-full sm:w-[280px] md:w-[312px]"
      height="h-auto md:h-[256px]"
      padding="px-4 md:px-6 pt-4 md:pt-6 pb-8 md:pb-[48px]"
      backgroundColor={backgroundColor}
    >
      <div className="flex flex-col h-full justify-between">
        <div>
          <span className="font-bold text-base md:text-[20px] leading-[24px] md:leading-[32px]">
            {title}
          </span>
          <p className="font-normal text-sm md:text-[14px] leading-[16px] mt-2">
            {description}
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex flex-col gap-y-2">
            <span className="font-semibold text-xs md:text-[12px] leading-[16px]">
              Por apenas:
            </span>
            <span className="font-semibold text-lg md:text-[20px] leading-[16px]">
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
