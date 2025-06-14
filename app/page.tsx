import CustomContainer from "@/components/custom-container";

export default function Home() {
  return (
    <div
      className="mt-[--header-height] pt-[47px] flex flex-col items-center w-full"
    >
      <div className="flex">
        <CustomContainer
          width={"w-[365px]"}
          height={"h-[952px]"}
          paddingHorizontal="px-6"
          paddginVertical="py-[20px]"
        >
          <div className="mt-[34px]">
            <span className="font-bold text-[18px] leading-[16px]">
              Ricardo Leite
            </span>
          </div>
        </CustomContainer>
      </div>
    </div>
  );
}
