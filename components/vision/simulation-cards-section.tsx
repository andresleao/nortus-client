import SimulationCard from "./simulation-card";

export default function SimulationCardsSection() {
    return (
        <div className="flex flex-col gap-y-6">
            <SimulationCard
                title="Seguro de vida individua"
                description="Proteção financeira completa com cobertura por morte e doenças graves"
                price="R$ 127,50/mês"
                backgroundColor="bg-[linear-gradient(to_bottom,_#2A97D4,_#3AB7D7)]"
                buttonBgColor="#1876D2"
            />
            <SimulationCard
                title="Upgrade do seguro residencial"
                description="Proteção financeira completa com cobertura por morte e doenças graves"
                price="R$ 127,50/mês"
                buttonBorderColor="white/50"
            />
        </div>
    );
}