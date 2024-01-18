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
  }
  return (
    <div style={{ width: '100vw'}}>
      <div style={{paddingBottom: '15px'}}  className="flex justify-between relative bg-white pt-2 pb-2">
        <div style={{paddingLeft: '50px'}}  className="flex gap-10 pl-10 relative">
          <h4 id='navh4' style={{transform: 'translateY(5px)', }}  >
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
        id='options'
          
          className="flex select "
        >
          <div  className='flex flex-wrap justify-center  m-auto gap-5 move'>
          <div className="flex gap-4 relative">
            <h1 id='rPick'
             
            >
              REGION
            </h1>
            <div class='dropPick'>
            <DropdownList
              id='drr'
              
              style={{ width: "200px", zIndex: "1000", height:'25px',   }}
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
          </div>
          <div className="flex gap-4 ">
            <h1 id='sPick'
              
            >
              SERIES (R2)
            </h1>
            <DropdownList
              className='dropPick'
              style={{ width: "200px", zIndex: "100",  height:'25px',  }}
              defaultValue={"GDP"}
              onChange={handleSeriesChange}
              data={["GDP", "GNI PER", "Unemployment", "Inflation"]}
            />
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
