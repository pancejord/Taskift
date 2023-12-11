import React from 'react'
import { Navbar } from './_components/Navbar';
interface MLayout {
    children: React.ReactNode;
}

const MarketingLayout:React.FC<MLayout> = ({children}) => {
  return (
    <div className='h-full bg-slate-100'>
        <Navbar />
        <main className='pt-40 pb-20 bg-slate-100'>
            {children}
        </main>
    </div>
  )
}

export default MarketingLayout