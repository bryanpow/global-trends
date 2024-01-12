import { React, useEffect, useState } from 'react'
import { formatForSort, gdpTotal, gniTotal, unemploymentTotal } from "./chartData";
import { inflationTotal } from "./chartData";
import { series } from './Nav';
import AOS from 'aos';
function TopChange() {
    const [currentSeries, setCurrentSeries] = useState(gdpTotal)
    useEffect(() => {
      const unsubscribe = series.subscribe((newValue) => {
        if (newValue === 'GDP') setCurrentSeries(gdpTotal);
        if (newValue === 'GNI PER')  setCurrentSeries(gniTotal);
        if (newValue === 'Unemployment') setCurrentSeries(unemploymentTotal);
        if (newValue === 'Inflation') setCurrentSeries(inflationTotal)
      });
      return () => unsubscribe();
    })
  const test = formatForSort(currentSeries);
  return (
    <>
        <div
            style={{ width: "308px", hieght: "100px" }}
            className="flex flex-col mt-1 p-5  justify-center cursor-pointer   transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl     bg-white   pt-10"
            >
            {series.value.length < 10?
                <h1
                key={series.value}
                data-aos='flip-up'
                style={{ transform: "translateY(-96px) translateX(10px)" }}
                className="text-base font-bold"
                    >
                HIGHEST CHANGES ({series.value})
                </h1>:
                <h1
                style={{ transform: "translateY(-96px) translateX(10px)" }}
                className="text-base font-bold"
                 >
                HIGHEST CHANGES (UE)
                 </h1>
        
        }
            
            <div style={{ transform: "translateY(30px) translateX(-5px)" }}>
                <div
                
                className="flex pl-2 pt-2 pb-2"
                style={{
                    transform: "translateX(7px) translateY(-100px)",
                    fontSize: "15px",
                    gap: "68px",
                    background: "#F4FAFF",
                }}
                >
                <p>Region</p> <p></p> % Change
                </div>
                {test.map((obj) => {
                return (
                    <div
                    className="flex justify-between"
                    style={{
                        transform: "translateY(-90px) translateX(8px)",
                        borderBottom: "1px solid lightgrey",
                        fontSize: "15px",
                    }}
                    >
                    <p className="pl-2" style={{}}>
                        {obj[0]}
                    </p>
                    <p className="pr-3"> {obj[1]}</p>
                    </div>
                );
                })}
            </div>
            </div>
    </>
  )
}

export default TopChange