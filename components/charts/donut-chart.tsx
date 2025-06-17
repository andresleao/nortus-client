'use client';

import { Segment } from '@/api/types/segment';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type DonutChartProps = {
  segments: Segment[];
};

export default function DonutChart({ segments }: DonutChartProps) {
    const colors = [
        "#1876D2",
        "#60A5FA",
        "#3B82F6",
        "#67E8F9",
        "#0EA5E9",
        "#5482e6",
        "#0d2ddf"
    ];

    const donutLabels = segments.map((segment, index) => ({
        label: segment.label,
        color: colors[index % colors.length],
    }));

    const series = segments.map(segment => segment.value * 100);

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
        labels: donutLabels.map((l) => l.label),
        tooltip: {
            y: {
                formatter: function (val: number) {
                    return `${val.toFixed(1)}%`;
                },
            },
        },
        plotOptions: {
            pie: {
                donut: {
                    size: '70%',
                },
            },
        },
    }), [donutLabels]);

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