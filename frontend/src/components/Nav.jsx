import React from "react";
import { signal, effect, useSignal } from "@preact/signals-react";
import DropdownList from "react-widgets/DropdownList";
import AOS from 'aos';
import { gdpTotal } from "./chartData";


export const region = signal("North America");
export const series = signal('GDP')
function Nav() {
  const handleRegionChange = (newValue) => {
    region.value = newValue;
  };
  const handleSeriesChange = (newValue) => {
    series.value = newValue;
    console.log(series.value)
  }
  return (
    <div>
      <div className="flex justify-between relative bg-white pt-2 pb-2">
        <div  className="flex gap-10 pl-10 relative">
          <h4 style={{ fontSize: "30px", transform: "translateY(-5px)" }}>☰</h4>
          <h4
            style={{
              fontSize: "25px",
              fontWeight: "bold",
              transform: "translateY(2px)",
            }}
          >
            Economic Trends ('02 - '22)
          </h4>
        </div>
        <div
          style={{
            gap: "50px",
            paddingRight: "100px",
            transform: "translateY(9px)",
          }}
          className="flex relative"
        ></div>
        <div
          style={{
            gap: "50px",
            paddingRight: "100px",
            position: "relative",
            top: "8.5px",
          }}
          className="flex "
        >
          <div className="flex gap-4 relative">
            <h1
              style={{
                fontSize: "15px",
                color: "grey",
                transform: "translateY(2px)",
              }}
            >
              REGION
            </h1>
            <DropdownList
              style={{ width: "200px", zIndex: "1000", height:'25px' }}
              defaultValue={"North America"}
              onChange={handleRegionChange}
              data={[
                "World",
                "North America",
                "East Asia & Pacific",
                "Europe & Central Asia",
                "Latin America & Caribbean",
                "Middle East & North Africa",
                "Sub-Saharan Africa",
                "South Asia",
              ]}
            />
          </div>
          <div className="flex gap-4 ">
            <h1
              style={{
                fontSize: "15px",
                color: "grey",
                transform: "translateY(2px)",
              }}
            >
              SERIES (R2)
            </h1>
            <DropdownList
              style={{ width: "200px", zIndex: "100",  height:'25px' }}
              defaultValue={"GDP"}
              onChange={handleSeriesChange}
              data={["GDP", "GNI PER", "Unemployment", "Inflation"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
