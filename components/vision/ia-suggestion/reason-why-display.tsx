import Indicator from "@/components/indicator";

type ReasonWhyDisplpayProps = {
    title: string
}

export default function ReasonWhyDisplay({ title }: ReasonWhyDisplpayProps) {
    return (
        <div className="flex items-center gap-x-[16px]">
            <Indicator />
            <p className="font-normal text-[14px] leading-[16px]">
                {title}
            </p>
        </div>
    );
}