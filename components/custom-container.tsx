import clsx from "clsx";
import { ReactNode } from "react";

type CustomContainerProps = {
    width: string,
    height?: string
    paddingHorizontal: string,
    paddginVertical: string,
    children?: ReactNode;
}

export default function CustomContainer({
    width,
    height,
    paddingHorizontal,
    paddginVertical,
    children
  }: CustomContainerProps ) {
    return (
        <div
            className={clsx(
                width,
                height,
                paddginVertical,
                paddingHorizontal,
                "flex flex-col items-center",
                "rounded-[24px]",
                "bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)]"
            )}
        >
            {children}
        </div>
    );
}