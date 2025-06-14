import clsx from "clsx"

type IndicatorProps = {
    color?: string,
}

export default function Indicator({ color = "#22ABDD" }: IndicatorProps) {
    return (
      <div
        className="w-[8px] h-[8px] rounded-full"
        style={{
          backgroundColor: color,
          boxShadow: `0 0 4px 2px ${color}`,
        }}
      />
    );
  }