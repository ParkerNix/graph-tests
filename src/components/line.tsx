import React, { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

interface LineGraphProps {
  labels: string[];
  datasets: { label: string; data: number[] }[];
  title: string;
}

const LineGraph: React.FC<LineGraphProps> = ({ labels, datasets, title }) => {
  const chartContainer = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart<'line'> | null>(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        chartInstance.current = new Chart(ctx, {
          type: 'line',
          data: {
            labels: labels,
            datasets: datasets,
          },
          options: {
            plugins: {
              title: {
                display: true,
                text: title,
              },
            },
          },
        } as ChartConfiguration<'line'>);
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [chartContainer, labels, datasets, title]);

  return <canvas ref={chartContainer} />;
};

export default LineGraph;
