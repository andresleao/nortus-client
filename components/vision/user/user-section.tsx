import { useSelector } from "react-redux";
import CustomContainer from "../../custom-container";
import ActionsSection from "./actions-section";
import CapturedPhrasesSection from "./captured-phrases-section";
import InfoCardsSection from "./info-cards-section";
import ProductsPriceDisplay from "./products-price-display";
import ProfileSection from "./profile-section";
import { RootState } from "@/components/provider/store";

export default function UserSection() {
    const client = useSelector((state: RootState) => state.vision.client);

    if (!client) return null;

    return (
        <CustomContainer
            width={'w-[365px]'}
            margin="mr-[20px]"
            padding="py-[20px]"
        >
            <div className="mt-[34px] text-center">
                <span className="font-bold text-[18px] leading-[16px]">
                    {client.name}
                </span>
            </div>
            <InfoCardsSection />
            <ProductsPriceDisplay products={client.products} />
            <ProfileSection profiles={client.profileTags} />
            <CapturedPhrasesSection phrases={client.capturedPhrases} />
            <ActionsSection actions={client.actions} />
        </CustomContainer>
    );
}