import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ResponseData } from "../hooks/useGlobalCovidData";
import { useEffect, useState, useCallback } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        color: "white",
        beginAtZero: true,
      },
    },
    x: {
      ticks: {
        color: "white",
        beginAtZero: true,
      },
    },
  },
};

interface Props {
  active: number | 0;
  deaths: number | 0;
  confirmed: number | 0;
}

const CountryChart: React.FunctionComponent<Props> = ({
  active,
  deaths,
  confirmed,
}) => {
  const labels: string[] = ["active", "death", "confirmed"];

  const data: number[] = [active, deaths, confirmed];

  const details = {
    labels,
    datasets: [
      {
        data: data,
        backgroundColor: ["#004D99", "#ed3750", "#8e44ad"],
      },
    ],
  };

  return (
    <>
      <div className="max-w-lg mx-auto bg-gray-920 text-white rounded-xl mb-2 p-4 border border-gray-100 text-center">
        <Bar options={options} data={details} />
      </div>
    </>
  );
};

export default CountryChart;
