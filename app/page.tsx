import CustomContainer from '@/components/custom-container';
import InfoCard from '@/components/info-card';
import Separator from '@/components/separator';
import ActionsDisplay from '@/components/vision/actions-display';
import ProductsPriceDisplay from '@/components/vision/products-price-display';
import ProfileSection from '@/components/vision/profile-section';

export default function Home() {
  return (
    <div className="mt-[--header-height] pt-[47px] flex flex-col items-center w-full">
      <div className="flex">
        <CustomContainer
          width={'w-[365px]'}
          height={'h-[952px]'}
          paddginVertical="py-[20px]"
        >
          <div className="mt-[34px]">
            <span className="font-bold text-[18px] leading-[16px]">
              Ricardo Leite
            </span>
          </div>
          <ActionsDisplay />
          <Separator marginVertical={"my-6"} />
          <ProductsPriceDisplay />
          <Separator marginVertical={"my-4"} />
          <ProfileSection />
        </CustomContainer>
      </div>
    </div>
  );
}
