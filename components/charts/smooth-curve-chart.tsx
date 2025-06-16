'use client';
import dynamic from "next/dynamic";
import React from "react";

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

type SmoothCurveChartPros = {
  values: number[];
  monthsLabels: string[]
};

const SmoothCurveChart = ({ values, monthsLabels }: SmoothCurveChartPros) => {
  const series = [
    {
      name: "Receita",
      data: [...values],
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      zoom: { enabled: false },
      background: "transparent",
      offsetY: 10,
    },
    colors: ["#00F0FF"],
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0,
        stops: [0, 100],
        colorStops: [
          {
            offset: 0,
            color: "#00F0FF",
            opacity: 0.6,
          },
          {
            offset: 100,
            color: "#00F0FF",
            opacity: 0,
          },
        ],
      },
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      y: {
        formatter: (val: number) => `R$ ${val.toFixed(1)}k`,
      },
    },
    xaxis: {
      categories: monthsLabels,
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        style: { colors: "#FFF", fontSize: "14px" },
      },
    },
    yaxis: {
      min: values[0],
      max: values[values.length -1],
      tickAmount: 4,
      labels: {
        style: { colors: "#FFF", fontSize: "14px" },
      },
    },
    grid: {
      borderColor: "rgba(255, 255, 255, 0.1)",
      strokeDashArray: 4,
      padding: {
        bottom: 70,
      },
    },
  };

  return (
    <div className="p-4 rounded-md">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={300}
      />
    </div>
  );
};

export default SmoothCurveChart;