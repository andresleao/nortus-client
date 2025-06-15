import InfoCard from "@/components/info-card";
import Separator from "../../separator";

export default function InfoCardsSection() {
    return (
        <>
          <div className="flex justify-between w-full mt-10 px-6">
              <InfoCard
                src="/phone.svg"
                title="Telefonar"
                alt="ícone de telefone"
              />
              <InfoCard
                src="/letter.svg"
                title="Enviar e-mail"
                alt="ícone de carta"
              />
              <InfoCard
                src="/more.svg"
                title="Ver mais"
                alt="ícone de reticência"
              />
          </div>
          <Separator marginVertical={"my-6"} />
        </>
    );
}