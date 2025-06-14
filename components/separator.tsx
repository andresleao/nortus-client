import clsx from "clsx"

type SeparatorProps = {
    marginVertical: string
}

export default function Separator({ marginVertical }: SeparatorProps ) {
    return (
        <div className={clsx(
            "flex w-full border border-white/10",
            marginVertical
        )}/>
    );
}