import clsx from "clsx";

type TextButtonProps = {
    label: string;
    margin?: string;
    backgroundColor?: string;
    borderColor?: string;
}

export default function TextButton({
    label,
    margin,
    backgroundColor,
    borderColor
}: TextButtonProps ) {
    return (
        <button
            className={clsx(
                margin,
                borderColor && `border border-[${borderColor}]`,
                "rounded-full p-[12px] cursor-pointer",
                "flex items-center justify-center w-fit",
            )}
            style={{
                ...(backgroundColor && {
                  backgroundColor: backgroundColor,
                  filter: `drop-shadow(0 0 10px ${backgroundColor})`,
                }),
            }}
        >
                <span className="font-semibold text-[12px] leading-[16px]">
                    {label}
                </span>
        </button>
    );
}