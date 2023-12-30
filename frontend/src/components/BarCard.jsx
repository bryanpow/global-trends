import React from 'react'
import { BarChart, Bar, AreaChart, PieChart, Pie, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line,  Cell,} from 'recharts';
import { formatForBar, inflationTotal, gdpTotal, gniTotal, unemploymentTotal } from './chartData'
const data2 = []
formatForBar(data2,gdpTotal)
export function BarCard({series}) {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          // Filter out the "Comparison" data from the tooltip
          const filteredPayload = payload.filter(p => p.dataKey !== 'Comparison');
      
          return (
            <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '10px', border: '1px solid #ccc' }}>
              <p className="label">{`${label}`}</p>
              {filteredPayload.map((entry, index) => (
                <p key={`item-${index}`} style={{ color: entry.color }}>
                  {`${entry.name} : ${entry.value}`}
                </p>
              ))}
            </div>
          );
        }
      
        return null;
      };
  return (
    <div>
         <div   style={{width: '640px', height: '400px', justifySelf: 'flex-start', marginRight: '2px'}} className='flex flex-col mt-0.5 p-5  justify-end cursor-pointer  transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl     bg-white   pt-10' >
            <h1 style={{transform: 'translateY(-25px) translateX(29px)'}} className='font-bold text-base'>%CHANGE BY COUNTRY (GDP)</h1>
            <BarChart width={550} height={280} data={data2} className=' flex justify-center   '>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(0, 0, 255, 0.8)" stopOpacity={0.3}/>
                        <stop offset="100%" stopColor="rgba(0, 0, 255, 0.8)" stopOpacity={0.9}/>
                    </linearGradient>
                    <linearGradient id="colorUv2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(255, 0, 0, 1)" stopOpacity={0.3}/>
                        <stop offset="100%" stopColor="rgba(255, 0, 0, 1)" stopOpacity={0.9}/>
                    </linearGradient>
                    
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
            <Tooltip content={<CustomTooltip />} />
            <Legend iconType='circle' align='left' verticalAlign='top' wrapperStyle={{ marginTop: '-25px', transform: 'translateX(25px)' }} formatter={(value, entry) => (<span style={{ color: 'grey' }}>{value}</span>)} />
            <YAxis axisLine={false} />
            <XAxis dataKey='name' opacity={0} />
            <Bar dataKey="North America" fill="url(#colorUv2)" shape='circle'  strokeWidth={3} />
            <Bar dataKey="Comparison" fill="url(#colorUv)" shape='circle'  strokeWidth={3}  />
            </BarChart>
        </div>
    </div>
  )
}

export default BarCard