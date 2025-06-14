import CustomContainer from "../../custom-container";
import ActionsSection from "./actions-section";
import CapturedPhrasesSection from "./captured-phrases-section";
import InfoCardsSection from "./info-cards-section";
import ProductsPriceDisplay from "./products-price-display";
import ProfileSection from "./profile-section";

export default function UserSection() {
    return (
        <CustomContainer
          width={'w-[365px]'}
          margin="mr-[20px]"
          padding="py-[20px]"
        >
          <div className="mt-[34px] text-center">
            <span className="font-bold text-[18px] leading-[16px]">
              Ricardo Leite
            </span>
          </div>
          <InfoCardsSection />
          <ProductsPriceDisplay />
          <ProfileSection />
          <CapturedPhrasesSection />
          <ActionsSection />
        </CustomContainer>
    );
}