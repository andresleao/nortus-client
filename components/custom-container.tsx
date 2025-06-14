import clsx from 'clsx';
import { ReactNode } from 'react';

type CustomContainerProps = {
  width?: string;
  padding?: string;
  margin?: string;
  children?: ReactNode;
};

export default function CustomContainer({
  width,
  padding,
  margin,
  children,
}: CustomContainerProps) {
  return (
    <div
      className={clsx(
        width,
        padding,
        margin,
        'flex flex-col h-auto',
        'rounded-[24px]',
        'bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.1)]',
      )}
    >
      {children}
    </div>
  );
}
