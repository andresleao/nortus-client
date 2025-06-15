import clsx from "clsx";

type TextButtonProps = {
    label: string
    margin?: string
}

export default function TextButton({ label, margin }: TextButtonProps ) {
    return (
       <button
            className={clsx(
                margin,
                "rounded-full bg-[#1876D2] p-[12px] cursor-pointer",
                "flex items-center justify-center w-fit",
                "[filter:drop-shadow(0_0_10px_#1876D2)]"
            )}
        >
            <span className="font-semibold text-[12px] leading-[16px]">
                {label}
            </span>
        </button>
    );
}