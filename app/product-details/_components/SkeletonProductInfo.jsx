import React from 'react'

export function SkeletonProductInfo() {
  return (
    <div className='flex flex-col gap-5'>
        <div className='h-[20px] w-[400px] bg-slate-200 animate-pulse'></div>
        <div className='h-[20px] w-[70px] bg-slate-200 animate-pulse'></div>
        <div className='h-[20px] w-[400px] bg-slate-200 animate-pulse'></div>
        <div className='h-[20px] w-[400px] bg-slate-200 animate-pulse'></div>
        <div className='h-[20px] w-[300px] bg-slate-200 animate-pulse'></div>
        <div className='h-[20px] w-[150px] bg-slate-200 animate-pulse'></div>
        <div className='h-[20px] w-[100px] bg-slate-200 animate-pulse'></div>
        <div className='h-[20px] w-[130px] bg-slate-200 animate-pulse'></div>
    </div>
  )
}

export default SkeletonProductInfo