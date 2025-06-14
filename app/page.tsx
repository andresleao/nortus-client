import IaSugestionSection from '@/components/vision/ia-suggestion/ia-sugestion-section';
import SimulationCard from '@/components/vision/simulation-card';
import UserSection from '@/components/vision/user/user-section';

export default function Home() {
  return (
    <div className="mt-[--header-height] pt-[47px] flex flex-col items-center w-full">
        <div className="flex items-start">
            <UserSection />
            <IaSugestionSection/>
            <div className="flex flex-col gap-y-[24px] ml-6">
                <SimulationCard
                    title="Seguro de vida individua"
                    description="Proteção financeira completa com cobertura por morte e doenças graves"
                    price="R$ 127,50/mês"
                    backgroundColor="bg-[linear-gradient(to_bottom,_#2A97D4,_#3AB7D7)]"
                />
                <SimulationCard
                    title="Upgrade do seguro residencial"
                    description="Proteção financeira completa com cobertura por morte e doenças graves"
                    price="R$ 127,50/mês"
            />
            </div>
        </div>
    </div>
  );
}
