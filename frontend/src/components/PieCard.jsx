import { React, useState, useEffect } from "react";
import { region, series } from "./Nav";
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
  data,
  gni,
  gdp,
  inflation,
  unemployment,
  inflationTotal,
  gdpTotal,
  gniTotal,
  unemploymentTotal,
  gdpSplit,
  gniSplit,
  unemploymentSplit,
  inflationSplit,
} from "./chartData";
import AOS from 'aos';
import 'aos/dist/aos.css';

function PieCard() {
  const [currentSeries, setCurrentSeries] = useState(gdpSplit)
  useEffect(() => {
    const unsubscribe = series.subscribe((newValue) => {
      if (newValue === 'GDP') setCurrentSeries(gdpSplit);
      if (newValue === 'GNI PER')  setCurrentSeries(gniSplit);
      if (newValue === 'Unemployment') setCurrentSeries(unemploymentSplit);
      if (newValue === 'Inflation') setCurrentSeries(inflationSplit)
    });
    AOS.init()
    return () => unsubscribe();
  })

  ;

  return (

    <>
      <div
        style={{ width: "308px", hieght: "100px" }}
        className="flex flex-col mt-1 p-5  justify-center cursor-pointer   transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl     bg-white   pt-10"
      >
        {series.value.length < 9?
        <h1 key={series.value} data-aos='flip=down' style={{position: 'relative'}} className="text-center font-bold text-base">PERCENT CHANGE ({series.value})</h1>:
        <h1 style={{position: 'relative'}} className="text-center font-bold text-base">PERCENT CHANGE (UE)</h1>
        }
        
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
            animationDuration='800'

            data={currentSeries[region.value]}
            cx="50%"
            cy="50%"
            innerRadius={100}
            outerRadius={135}
            startAngle={-270}
            endAngle={90}
            dataKey={'value'}
          >
            {currentSeries[region.value].map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`url(#${index % 2 === 0 ? "colorUv" : "colorUv2"})`}
              />
            ))}
          </Pie>
          {
  region.value === "Sub-Saharan Africa" && series.value.length > 9?

      <text
        x={"50%"}
        y={"40%"}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="grey"
      >
        NO DATA
      </text>
      
  
    :
    <>
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
    </>
}
          <Tooltip />
        </PieChart>
      </div>
    </>
  );
}

export default PieCard;
