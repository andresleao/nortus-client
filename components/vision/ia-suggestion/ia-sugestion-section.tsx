import Separator from "@/components/separator";
import CustomContainer from "../../custom-container";
import OptionsSelector from "./options-selector";
import ReasonWhyArea from "./reason-why-area";
import RecommendedOfferArea from "./recommended-offer-area";
import TextButton from "@/components/text-button";
import { useSelector } from "react-redux";
import { RootState } from "@/components/provider/store";

export default function IaSugestionSection() {
    const client = useSelector((state: RootState) => state.vision.client);

    if (!client) return null;

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
                <RecommendedOfferArea recommendedOffer={client.iaRecommendation}  />
                <Separator marginVertical="my-6" />
                <ReasonWhyArea reasons={client.iaRecommendation.reasonWhy} />
                <TextButton
                    label="Simular conversa com IA"
                    margin="ml-6"
                    backgroundColor="#1876D2"
                />
            </div>
        </CustomContainer>
    );
}