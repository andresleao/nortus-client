'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import type { ApexOptions } from 'apexcharts';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type ScoreBarProps = {
  label: string;
  scorePercentual: number;
};

export default function ExpansionScoreBar({ label, scorePercentual }: ScoreBarProps) {
  const series: ApexAxisChartSeries = [
    {
      data: [scorePercentual],
    },
  ];

  const getBarColor = () => {
    if (scorePercentual >= 80) return '#00DC04';
    if (scorePercentual >= 50) return '#C29F00';
    return '#DC3300';
  };

  const barColor = getBarColor();

  const options: ApexOptions = {
    chart: {
      type: 'bar',
      height: 10,
      sparkline: { enabled: true },
      background: 'transparent',
    },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 4,
        barHeight: '100%',
      },
    },
    fill: {
      colors: [barColor],
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

  const scoreStatus = () => {
    if (scorePercentual >= 80) return 'Alto';
    if (scorePercentual >= 50) return 'Médio';
    return 'Baixo';
  };

  return (
    <div className="bg-white/5 rounded-[16px] p-4 min-h-[96px] flex flex-col justify-center w-[300px] 2xl:w-full 2xl:max-w-full">
      <div className="flex items-center justify-between gap-x-4 mb-4 flex-wrap">
        <span className="text-sm md:text-base font-normal leading-[16px]">
          {label}
        </span>
        <span
          className="text-white text-xs md:text-sm font-semibold px-3 py-1 rounded-full"
          style={{ backgroundColor: barColor }}
        >
          {scoreStatus()}
        </span>
      </div>
      <div className="relative w-full max-w-full h-[10px]">
        <div className="absolute left-0 h-full bg-white/10 rounded-[16px] z-0 w-[266px] 2xl:max-w-full" />
        <div
          className="relative h-full z-10"
          style={{ filter: `drop-shadow(0 0 4px ${barColor})` }}
        >
          <ApexChart
            options={options}
            series={series}
            type="bar"
            height={10}
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}