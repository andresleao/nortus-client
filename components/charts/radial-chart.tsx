'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// ApexCharts deve ser carregado de forma dinâmica no Next.js
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export default function RadialChart() {
  const series = [11]; // Valor percentual (ex: 11%)

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: 'radialBar' as const,
      offsetY: -20,
      sparkline: {
        enabled: true,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        hollow: {
          margin: 0,
          size: '60%',
        },
        track: {
          background: '#40475D',
          strokeWidth: '100%',
        },
        dataLabels: {
          show: false,
        },
      },
    },
    fill: {
      colors: ['#1D9BF0'],
    },
    stroke: {
      lineCap: 'round',
    },
    labels: ['Probabilidade de Churn'],
  };

  return (
    <div>
      <ApexChart
        options={options}
        series={series}
        type="radialBar"
        height={160}
    />
    </div>
  );
}