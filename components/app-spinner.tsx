'use client';

import clsx from "clsx";
import { ClipLoader } from "react-spinners";

interface AppSpinnerProps {
  size?: number;
  color?: string;
  label?: string;
  fullScreen?: boolean;
  visible?: boolean;
}

export const AppSpinner = ({
  size = 80,
  color = '#00BFFF',
  label = 'Loading...',
  fullScreen = false,
  visible = true,
}: AppSpinnerProps) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center gap-4',
        fullScreen &&
          'fixed inset-0 z-50 w-screen h-screen bg-white/50 backdrop-blur-sm'
      )}
    >
      <ClipLoader size={size} color={color} cssOverride={{ borderWidth: '6px' }} />
      {label && <p className="text-[#333] text-base font-medium mt-4">{label}</p>}
    </div>
  );
};