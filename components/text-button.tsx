import clsx from "clsx";

type TextButtonProps = {
    label: string;
    margin?: string;
    backgroundColor?: string;
    borderColor?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isActive?: boolean;
}

export default function TextButton({
    label,
    margin,
    backgroundColor,
    borderColor,
    onClick,
    isActive = true,
}: TextButtonProps ) {
    return (
        <button
            onClick={onClick}
            className={clsx(
                margin,
                borderColor && `border border-[${borderColor}]`,
                "rounded-full p-[12px]",
                "flex items-center justify-center w-fit",
                isActive ? "cursor-pointer" : "opacity-40 cursor-default"
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