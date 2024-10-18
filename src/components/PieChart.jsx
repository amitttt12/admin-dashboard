// import React from "react";
// import { Doughnut } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

// const data = {
//   labels: [
//     // 'Red',
//     // 'Blue',
//     // 'Yellow'
//   ],
//   datasets: [{
//     label: 'My First Dataset',
//     data: [300, 50, 100],
//     backgroundColor: [
//       'rgb(255, 99, 132)',
//       'rgb(54, 162, 235)',
//       'rgb(255, 205, 86)'
//     ],
//     hoverOffset: 4
//   }]
// };

// const PieChart = () => {
//   return <Doughnut  data={data} />;
// };

// export default PieChart;

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const data = {
      labels: [],
      datasets: [
        {
          data: [30, 40, 20],
          backgroundColor: ["#FF5733", "#33FF57", "#3333FF"],
        },
      ],
    };

    const options = {
      plugins: {
        doughnutCenterText: {
          line1: "65%",
          line2: "Total New",
          line3: "Customers",
          color: "#000",
          fontSize: 16,
          fontWeight: 'bold',
          // textAlign: 'left',
        },
      },
    };

    const myChart = new Chart(chartRef.current, {
      type: "doughnut",
      data: data,
      options: options,
      plugins: [
        {
          beforeDraw: (chart) => {
            const ctx = chart.ctx;
            const text = chart.options.plugins.doughnutCenterText;

            if (text) {
              const width = chart.width;
              const height = chart.height;
              const fontSize = text.fontSize || 12;
              const textX = Math.round((width - ctx.measureText(text.line1).width) / 2);
              const textY = height / 2;
  
              ctx.fillStyle = text.color || '#000';
              ctx.textAlign = 'center';
              ctx.font = `${text.fontWeight || 'normal'} ${fontSize}px ${text.fontFamily || 'Arial, sans-serif'}`;
              ctx.fillText(text.line1, textX, textY - fontSize); // Adjust Y position for the second line
              ctx.fillText(text.line2, textX, textY);
              ctx.fillText(text.line3, textX, textY + fontSize); // Adjust Y position for the third line
            }
          },
        },
      ],
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default PieChart;
