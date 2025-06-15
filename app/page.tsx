import ClassificationSection from '@/components/vision/classification/classification-section';
import IaSugestionSection from '@/components/vision/ia-suggestion/ia-sugestion-section';
import SimulationCardsSection from '@/components/vision/simulation-cards-section';
import UserSection from '@/components/vision/user/user-section';

export default function Home() {
  return (
    <div className="mt-[--header-height] pt-[47px] flex flex-col items-center w-full">
        <div className="flex items-start">
            <UserSection />
            <div className="flex flex-col ml-6">
                <div className="flex gap-x-6 mb-[40px]">
                    <IaSugestionSection/>
                    <SimulationCardsSection />
                </div>
                <ClassificationSection />
            </div>

        </div>
    </div>
  );
}
