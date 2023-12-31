import React from "react";
import {
  inflationTotal,
  gdpTotal,
  gniTotal,
  unemploymentTotal,
} from "./chartData";
import AreaCard from "./AreaCard";
import BarCard from "./BarCard";
import PieCard from "./PieCard";
import { useEffect, useState } from "react";

import { region } from "./Nav";
import AOS from 'aos';
import TopChange from "./TopChange";


export function Dash({ scatterStyle, barStyle, textStyle }) {
  const [currentRegion, setCurrentRegion] = useState(region.value);

  useEffect(() => {
    const unsubscribe = region.subscribe((newValue) => {
      setCurrentRegion(newValue);
    });
    return () => unsubscribe();
  }, []);

  let gni = 0;
  let unemployment = 1;
  let gdp = 2;
  let inflation = 3;

  if (currentRegion === "Sub-Saharan Africa") {
    gni = 0;
    gdp = 1;
    inflation = 2;
    unemployment = 5;
  }
  
  return (
    <>

      <div className="flex gap-5 mt-5  flex-wrap justify-center">
        <AreaCard
          series={gdp}
          number={`+${gdpTotal[`${currentRegion}`]}%`}
          title="GLOBAL DOMESTIC PROFIT"
          stroke="blue"
          fill="rgba(0, 0, 255, 1)"
        />
        <AreaCard
          series={gni}
          number={`+${gniTotal[`${currentRegion}`]}%`}
          title="GROSS NATIONAL INCOME PER"
          stroke="yellow"
          fill="rgba(255, 255, 0, 1)"
        />
        <AreaCard
          series={unemployment}
          number={`${unemploymentTotal[`${currentRegion}`]}`}
          title="UNEMPLOYMENT"
          stroke="rgba(0, 255, 0, 1)"
          fill="rgba(0, 255, 0, 1)"
        />
        <AreaCard
          series={inflation}
          number={`+${inflationTotal[`${currentRegion}`]}%`}
          title="INFLATION"
          stroke="rgba(255, 0, 0, 1)"
          fill="rgba(255, 0, 0, 1)"
        />
        <BarCard />
        <PieCard />
        <TopChange />
      </div>
    </>
  );
}

export default Dash;
