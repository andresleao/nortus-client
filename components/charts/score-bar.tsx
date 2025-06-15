'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import type { ApexOptions } from 'apexcharts';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type ScoreBarProps = {
    label: string,
}

export default function ExpansionScoreBar({ label }: ScoreBarProps) {
  const series: ApexAxisChartSeries = [
    {
      data: [85],
    },
  ];

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 10,
      sparkline: {
        enabled: true,
      },
      background: 'transparent'
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
        barHeight: '100%',
      },
    },
    fill: {
      colors: ['#00DC04'],
    },
    grid: { show: false },
    tooltip: { enabled: false },
    xaxis: {
      categories: [''],
      max: 100,
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false },
    },
    yaxis: { show: false },
    dataLabels: { enabled: false },
  };

  return (
    <div className="bg-white/5 rounded-[16px] w-full p-4 h-[96px] flex flex-col justify-center">
        <div className="flex items-center gap-x-[16px] mb-[16px]">
            <span className="font-normal text-[14px] leading-[16px]">
                {label}
            </span>
            <span className="bg-[#00DC04] text-white px-3 py-0.5 rounded-full text-sm font-semibold">
                Alto
            </span>
        </div>
        <div className="relative w-full h-[10px]">
            <div className="absolute  left-0 w-full h-full bg-white/10 rounded-[16px] z-0" />
            <div className="relative h-full z-10 [filter:drop-shadow(0_0_4px_#00DC04)]">
                <ApexChart
                    options={options}
                    series={series}
                    type="bar"
                    height="100%"
                />
            </div>
        </div>
    </div>
  );
}

