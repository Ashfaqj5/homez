import React from 'react'

export default function H5() {
  return (
    <div className='grid grid-cols-2  pl-48 p-24 bg-[#E9E9E9]'>
        <div className='flex flex-col gap-14 items-left'>
            <div>
                <h2>More than 10 Years of Experience</h2>
                <span>Lorem ipsum dolor sit amet, consectetur.</span>
            </div>
            <div className='flex justify-between'>
                <span className='flex flex-col'>
                    <span className='text-2xl font-bold'>85%</span>
                    <span className='text-sm'>Completed Property</span>
                </span>
                <span className='flex flex-col'>
                    <span className='text-2xl font-bold'>99%</span>
                    <span className='text-sm'>Completed Property</span>
                </span>
                <span className='flex flex-col'>
                    <span className='text-2xl font-bold'>95%</span>
                    <span className='text-sm'>Completed Property</span>
                </span>
            </div>
        </div>
    </div>
  )
}
