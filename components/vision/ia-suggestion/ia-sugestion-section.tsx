import Separator from "@/components/separator";
import CustomContainer from "../../custom-container";
import OptionsSelector from "./options-selector";
import ReasonWhyArea from "./reason-why-area";
import RecommendedOfferArea from "./recommended-offer-area";
import TextButton from "@/components/text-button";

export default function IaSugestionSection() {
    return (
        <CustomContainer
            width="w-[629px]"
            height="h-[536px]"
            padding="px-6 pb-[32px]"
        >
            <div className="flex items-center justify-between mb-[12px] mt-6">
                <span className="font-bold text-2xl leading-[16px]">
                    Sugestão da IA
                </span>
                <OptionsSelector />
            </div>
            <div className="flex flex-col mt-[12px] bg-white/5 rounded-2xl pb-6">
                <RecommendedOfferArea />
                <Separator marginVertical="my-6" />
                <ReasonWhyArea />
                <TextButton
                    label="Simular conversa com IA"
                    margin="ml-6"
                />
            </div>
        </CustomContainer>
    );
}