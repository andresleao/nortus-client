import ReasonWhyDisplay from "./reason-why-display";

export default function ReasonWhyArea() {
    return (
        <div className="flex flex-col gap-[16px] px-6 mb-6">
             <span className="font-semibold text-[18px] leading-[16px]">
                Reason Why
            </span>
            <div className="flex flex-col gap-y-[8px]">
                <ReasonWhyDisplay title="Cliente tem perfil profissional liberal compatível com produto" />
                <ReasonWhyDisplay title="Cliente tem perfil profissional liberal compatível com produto" />
                <ReasonWhyDisplay title="Cliente tem perfil profissional liberal compatível com produto" />
                <ReasonWhyDisplay title="Cliente tem perfil profissional liberal compatível com produto" />
            </div>
        </div>
    );
}