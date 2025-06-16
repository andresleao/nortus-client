import ReasonWhyDisplay from "./reason-why-display";

type ReasonWhyAreaPros = {
    reasons: string[];
}

export default function ReasonWhyArea({ reasons }: ReasonWhyAreaPros) {
    return (
        <div className="flex flex-col gap-[16px] px-6 mb-6">
             <span className="font-semibold text-[18px] leading-[16px]">
                Reason Why
            </span>
            <div className="flex flex-col gap-y-[8px]">
                {reasons.map((r, i) => <ReasonWhyDisplay key={i} title={r} />)}
            </div>
        </div>
    );
}