import React from 'react'
import { AreaChart, PieChart, Pie, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line } from 'recharts';
import { formatDataForChart, data, inflation } from './chartData';

function AreaCard({number, title, stroke, fill, series}) {
    let arr = []
    formatDataForChart(arr, data, series)
    const gradUrl =`${ Math.random() * 10000}`
  return (
    <div><div  style={{width: '270px', boxSizing: 'content-box'}} className='flex flex-col mt-10 p-5 justify-center cursor-pointer  mx-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl     bg-white   pt-10' >
    <h1  style={{color: '#423D0F', fontSize: '30px', fontWeight: 'bold'}} >{number}</h1>
    <h1 style={{fontSize: '15px', color: 'grey'}}>{title}</h1>
    <div className=' flex justify-center aspect-w-10 aspect-h-5 w-full '>
        <ResponsiveContainer width='95%'   className='m-auto' > 
            <AreaChart data={arr}>
            <defs>
                <linearGradient id={number} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={fill} stopOpacity={0.8}/>
                {
                    series !== inflation && <stop offset="95%" stopColor={'white'} stopOpacity={0}/>
                }
                {
                    series === inflation && <stop offset="100%" stopColor='white' stopOpacity={0.6}/>
                }
                </linearGradient>
            </defs>
                <XAxis interval={3}  angle={-60} tick={{ fontSize: '10px', overflow: 'visible', dy:10, fill: '#423D0F' }} axisLine={{ stroke: 'white' }}  dataKey="name" />
                
                <Area type='linear' dataKey="North America" stroke={stroke} strokeWidth={3} fill={`url(#${number})`} />
        </AreaChart>
        </ResponsiveContainer>
    </div>
</div></div>
  )
}

export default AreaCard