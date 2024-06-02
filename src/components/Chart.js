import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";
import styled from "styled-components";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);
const ChartContainer = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
`;

const ChartTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 18px;
  font-weight: bold;
`;

const Chart = ({ type, title, data, options }) => {
  return (
    <ChartContainer>
      <ChartTitle>{title}</ChartTitle>
      {type === "bar" && <Bar data={data} options={options} />}
      {type === "doughnut" && <Doughnut data={data} options={options} />}
    </ChartContainer>
  );
};

export default Chart;
