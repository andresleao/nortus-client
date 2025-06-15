import clsx from "clsx";

type TextButtonProps = {
    label: string;
    margin?: string;
    backgroundColor?: string;
}

export default function TextButton({
    label,
    margin,
    backgroundColor
}: TextButtonProps ) {
    return (
        <button
            className={clsx(
                margin,
                "rounded-full p-[12px] cursor-pointer",
                "flex items-center justify-center w-fit",
            )}
            style={{
                backgroundColor: backgroundColor ?? "#F6F8FC1A",
                filter: `drop-shadow(0 0 10px ${backgroundColor ?? null})`,
              }}
        >
            <span className="font-semibold text-[12px] leading-[16px]">
                {label}
            </span>
        </button>
    );
}