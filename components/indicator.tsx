import clsx from "clsx"

type IndicatorProps = {
    color: string,
}

export default function Indicator({
    color = "#22ABDD"
}: IndicatorProps) {
    return (
        <div className={clsx(
            "w-[8px] h-[8px] rounded-full",
            `bg-[${color}] shadow-[0_0_4px_2px_${color}]`
        )} />
    );
}