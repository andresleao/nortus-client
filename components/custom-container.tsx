import clsx from 'clsx';
import { ReactNode } from 'react';

type CustomContainerProps = {
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  backgroundColor?: string,
  children?: ReactNode;
};

export default function CustomContainer({
  width,
  height,
  padding,
  margin,
  backgroundColor,
  children,
}: CustomContainerProps) {
  return (
    <div
      className={clsx(
        width,
        height,
        padding,
        margin,
        backgroundColor,
        "flex flex-col",
        "rounded-[24px]",
        "bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)]",
      )}
    >
      {children}
    </div>
  );
}
