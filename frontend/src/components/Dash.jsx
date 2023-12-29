import React from 'react'
import { BarChart, Bar, AreaChart, PieChart, Pie, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line} from 'recharts';
import { formatDataForChart, data, gni, gdp, inflation, unemployment} from './chartData';
import InfoCard from './InfoCard';
import AreaCard from './AreaCard';
export function Dash({scatterStyle, barStyle, textStyle }) {
    const inflationTotal = {
        'East Asia & Pacific': 62,
        'Europe & Central Asia': 61,
        'Latin America & Caribbean':84,
        'Middle East & North Africa': 79,
        'Sub-Saharan Africa': 128,
        'World': 95,
        'North America': 73,
        'South Asia': 156,
    }
    const unemploymentTotal = {
        'East Asia & Pacific': '+0.06',
        'Europe & Central Asia': '-1.57',
        'Latin America & Caribbean': '-2.44%',
        'Middle East & North Africa': '-2.17%',
        'Sub-Saharan Africa': 1,
        'World': '-0.22%',
        'North America': '-2.33%',
        'South Asia': '-3.26%'
    }

    const gniTotal= {
        "East Asia & Pacific": 230,
        "Europe & Central Asia": 109,
        "Latin America & Caribbean": 128,
        "Middle East & North Africa": 150,
        "Sub-Saharan Africa": 142,
        "World": 120,
        "North America": 94,
        "South Asia": 340
    }

    const gdpTotal = {
        "East Asia & Pacific": 253,
        "Europe & Central Asia": 87,
        "Latin America & Caribbean": 226,
        "Middle East & North Africa": 282,
        "Sub-Saharan Africa": 269,
        "World": 158,
        "North America": 123,
        "South Asia": 441
    }
    const pageTitle = 'North America'
    const data1 = [
        {name: 'Page A', uv: 4000},
        {name: 'Page B', uv: 3000},
        // ... more data points
      ];

      let data2 = []
      const formatForBar = (arr,series) => {
        for (const entry in series) {
            arr.push(
                {
                    name: entry,
                    'Change(%)': series[entry]
                }
            )
          }
          console.log(data2)
      }
      formatForBar(data2,gdpTotal)
  return (
    <>
    <h2 style={{marginLeft: '5%', fontSize: '50px'}}>{pageTitle}</h2>

    <div className='flex gap-5 flex-wrap ml-10 mr-10 justify-center m-auto'>
    <AreaCard series={gdp} number={`+${gdpTotal[`${pageTitle}`]}%`} title='GLOBAL DOMESTIC PROFIT' stroke='blue' fill='rgba(0, 0, 255, 1)'  />
    <AreaCard series={gni} number={`+${gniTotal[`${pageTitle}`]}%`} title='GROSS NATIONAL INCOME PER' stroke='yellow' fill='rgba(255, 255, 0, 1)' />
    <AreaCard series={unemployment} number={`${unemploymentTotal[`${pageTitle}`]}`} title='UNEMPLOYMENT' stroke='rgba(0, 255, 0, 1)' fill='rgba(0, 255, 0, 1)' />
    <AreaCard series={inflation} number={`+${inflationTotal[`${pageTitle}`]}%`} title='INFLATION (2002 - 2022)' stroke='rgba(255, 0, 0, 1)' fill='rgba(255, 0, 0, 1)' />
    {/* rgba(128, 0, 128, 1) */}
    <div   style={{width: '650px'}} className='flex flex-col mt-10 p-5 justify-center cursor-pointer  mx-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl     bg-white   pt-10' >
        <BarChart width={600} height={300} data={data2}>
            <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(128, 0, 255, 0.8)" stopOpacity={0.8}/>
                <stop offset="100%" stopColor="rgba(128, 0, 255, 0.8)" stopOpacity={0.3}/>
            </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <YAxis axisLine={false} />
        <XAxis dataKey='name' opacity={0} />
        <Bar dataKey="Change(%)" fill="rgba(0, 0, 255, 0.8)" shape='circle'  strokeWidth={3} />
        </BarChart>
    </div>
    
    </div>
    </>

  )
}

export default Dash