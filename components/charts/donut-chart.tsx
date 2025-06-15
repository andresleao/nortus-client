'use client';

import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const donutLabels = [
  { label: 'Premium', color: '#1876D2' },
  { label: 'Alta Renda', color: '#60A5FA' },
  { label: 'Familiar', color: '#3B82F6' },
  { label: 'Jovem', color: '#67E8F9' },
  { label: 'Profissional', color: '#0EA5E9' },
];

export default function DonutChart() {
  const series = [20, 25, 15, 18, 22];

  const options = useMemo(() => ({
    chart: {
      type: 'donut' as const,
    },
    legend: {
      show: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    colors: donutLabels.map((l) => l.color),
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
        },
      },
    },
  }), []);

  return (
    <div className="flex flex-col items-center gap-4">
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        height={200}
        width={200}
      />

      <div className="flex flex-wrap gap-2 justify-center">
        {donutLabels.map(({ label, color }) => (
          <div
            key={label}
            className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white text-sm"
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: color }}
            />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}