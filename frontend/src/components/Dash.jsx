import React from 'react'
import { BarChart, Bar, AreaChart, PieChart, Pie, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line, Cell} from 'recharts';
import { formatDataForChart, formatDataForPieChart, data, gni, gdp, inflation, unemployment, inflationTotal, gdpTotal, gniTotal, unemploymentTotal } from './chartData';
import InfoCard from './InfoCard';
import AreaCard from './AreaCard';
import BarCard from './BarCard';
import PieCard from './PieCard';
import Nav from './Nav';
import { formatForSort } from './chartData';
const test = formatForSort(inflationTotal);
console.log(test)
export function Dash({scatterStyle, barStyle, textStyle }) { 
  const pageTitle = 'North America' 
  return (
    <>
    {/* <h2 style={{marginLeft: '5%', fontSize: '30px'}}>{pageTitle}</h2> */}
    
    <div className='flex gap-5 mt-5  flex-wrap justify-center'>
    <AreaCard series={gdp} number={`+${gdpTotal[`${pageTitle}`]}%`} title='GLOBAL DOMESTIC PROFIT' stroke='blue' fill='rgba(0, 0, 255, 1)'  />
    <AreaCard series={gni} number={`+${gniTotal[`${pageTitle}`]}%`} title='GROSS NATIONAL INCOME PER' stroke='yellow' fill='rgba(255, 255, 0, 1)' />
    <AreaCard series={unemployment} number={`${unemploymentTotal[`${pageTitle}`]}`} title='UNEMPLOYMENT' stroke='rgba(0, 255, 0, 1)' fill='rgba(0, 255, 0, 1)' />
    <AreaCard series={inflation} number={`+${inflationTotal[`${pageTitle}`]}%`} title='INFLATION (2002 - 2022)' stroke='rgba(255, 0, 0, 1)' fill='rgba(255, 0, 0, 1)' />
    <BarCard />
    <PieCard />
    <div  style={{width: '308px', hieght: '100px'}} className='flex flex-col mt-1 p-5  justify-center cursor-pointer   transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl     bg-white   pt-10' >
        <h1 style={{transform: 'translateY(-96px) translateX(10px)'}} className='text-base font-bold'>HIGHEST CHANGES (WORLD)</h1>
        <div style={{transform: 'translateY(30px) translateX(-5px)'}}>
        <div className='flex pl-2 pt-2 pb-2' style={{ transform: 'translateX(7px) translateY(-100px)', fontSize:'15px', gap:'68px', background: '#F4FAFF'}}><p>Region</p> <p></p> % Change</div>
        {test.map((obj => {
            return (
                <div className='flex justify-between' style={{transform: 'translateY(-90px) translateX(8px)', borderBottom: '1px solid lightgrey',fontSize: '15px'}} ><p className='pl-2' style={{}}>{obj[0]}</p><p className='pr-3'> {obj[1]}</p></div>
            )
           
        }))}
        
        </div>
        
        </div>
    </div>
    </>

  )
}

export default Dash