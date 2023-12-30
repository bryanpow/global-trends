import React from "react";
import {
  BarChart,
  Bar,
  AreaChart,
  PieChart,
  Pie,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  Cell,
} from "recharts";
import {
  formatDataForChart,
  formatDataForPieChart,
  data,
  gni,
  gdp,
  inflation,
  unemployment,
  inflationTotal,
  gdpTotal,
  gniTotal,
  unemploymentTotal,
} from "./chartData";


function PieCard() {
  let data5 = [];
  formatDataForPieChart(data5, data, gni);
  console.log(data5);
  return (
    <>
      <div
        style={{ width: "308px", hieght: "100px" }}
        className="flex flex-col mt-1 p-5  justify-center cursor-pointer   transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl     bg-white   pt-10"
      >
        <h1 className="text-center font-bold text-base">PERCENT CHANGE</h1>
        <PieChart
          width={400}
          height={300}
          style={{ transform: "scale(0.7) translateX(-92px)" }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="rgba(0, 0, 255, 0.8)"
                stopOpacity={0.5}
              />
              <stop
                offset="100%"
                stopColor="rgba(0, 0, 255, 0.8)"
                stopOpacity={0.9}
              />
            </linearGradient>
            <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="0%"
                stopColor="rgba(255, 0, 0, 1)"
                stopOpacity={0.5}
              />
              <stop
                offset="100%"
                stopColor="rgba(255, 0, 0, 1)"
                stopOpacity={0.9}
              />
            </linearGradient>
          </defs>
          <Legend
            iconType="circle"
            wrapperStyle={{
              transform: "translateY(60px) translateX(5px)",
              color: "gray",
            }}
          />
          <Pie
            data={data5}
            cx="50%"
            cy="50%"
            innerRadius={100}
            outerRadius={135}
            startAngle={-270}
            endAngle={90}
            dataKey="North America"
          >
            {data5.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`url(#${index % 2 === 0 ? "colorUv" : "colorUv2"})`}
              />
            ))}
          </Pie>
          <text
            x={"50%"}
            y={"40%"}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="grey"
          >
            2002-2012
          </text>
          <text
            x={"50%"}
            y={"50%"}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="grey"
          >
            VS
          </text>
          <text
            x={"50%"}
            y={"60%"}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="grey"
          >
            2012-2022
          </text>
          <Tooltip />
        </PieChart>
      </div>
    </>
  );
}

export default PieCard;
