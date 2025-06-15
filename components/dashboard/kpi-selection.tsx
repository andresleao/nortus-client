import TextButton from "../text-button";

export default function KpiSelection() {
    return (
        <div className="flex items-center justify-center gap-x-[24px] py-[6px] px-[12px] rounded-full bg-white/5">
            <TextButton label="Retenção" />
            <TextButton label="Conversão"/>
            <TextButton label="Churn" />
            <TextButton label="ARPU" backgroundColor="#2DB3C8" />
        </div>
    );
}