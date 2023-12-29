import React from 'react'

export function InfoCard() {
  return (
    <><div class=" flex flex-col justify-center overflow-hidden  ">
    <div
        className="group  flex flex-col justify-center relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
        <span className="absolute  h-1 w-1 opacity-0 rounded bg-shine1 transition-all duration-300 group-hover:scale-[200] group-hover:opacity-100"></span>
        <div className="relative z-10 mx-auto max-w-md">
            
            <div
                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-black/90">
                <p>Perfect for learning how the framework works, prototyping a new idea, or creating a demo to share
                    online.</p>
            </div>
            <div className="pt-5 text-base font-semibold leading-7">
                <p>
                    <a href="#" className="text-black transition-all duration-300 group-hover:text-black">Read the docs
                        &rarr;
                    </a>
                </p>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default InfoCard