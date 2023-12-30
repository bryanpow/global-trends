import React from 'react'
import { signal } from "@preact/signals";
import { PrimeReactProvider, PrimeReactContext,  } from 'primereact/api';
import { Dropdown } from 'primereact/dropdown';
function Nav() {
    const selectedCity = signal("New York")
  return (
    <>
    <div className='flex justify-between bg-white pt-2 pb-2'>
   
    <div className='flex gap-10 pl-10'><h4 style={{fontSize: '30px', transform: 'translateY(-7px)', }} >☰</h4><h4 style={{fontSize: '25px', fontWeight: 'bold'}}>Economic Trends</h4></div>
  
    </div>
    </>
  )
}

export default Nav