'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import type { ApexOptions } from 'apexcharts';
import clsx from 'clsx';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type ScoreBarProps = {
    label: string,
    scorePercentual: number
}

export default function ExpansionScoreBar({ label, scorePercentual }: ScoreBarProps) {
    const series: ApexAxisChartSeries = [
        {
            data: [scorePercentual],
        },
    ];

    const getBarColor = () => {
        if (scorePercentual >= 80) return "#00DC04";
        if (scorePercentual >= 50 && scorePercentual < 80) return "#C29F00";
        return "#DC3300";
    };

    const barColor = getBarColor();

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
        if (scorePercentual >= 80) return "Alto";
        if (scorePercentual >= 50 && scorePercentual < 80) {
            return "Médio";
        }

        return "Baixo";
    };

    return (
        <div className="bg-white/5 rounded-[16px] p-4 min-h-[96px] flex flex-col justify-center w-full flex-1" >
            <div className="flex items-center gap-x-[16px] mb-[16px]">
                <span className="font-normal text-[14px] leading-[16px]">
                    {label}
                </span>
                <span
                    className={clsx(
                    `bg-[${barColor}]`,
                    "text-white px-3 py-0.5 rounded-full text-sm font-semibold"
                    )}
                    style={{ backgroundColor: barColor }}
                >
                    {scoreStatus()}
                </span>
            </div>
            <div className="relative w-full h-[10px]">
                <div className="absolute left-0 w-full h-full bg-white/10 rounded-[16px] z-0" />
                <div
                    className="relative h-full z-10"
                    style={{
                        filter: `drop-shadow(0 0 4px ${barColor})`
                    }}
                >
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