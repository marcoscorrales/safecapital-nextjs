import React, { useState } from 'react'
import Cards from './Cards.jsx'
import ChartLine from './ChartLine.jsx'
import FeaturedSectors from './FeaturedSectors.jsx'
import Header from './Header.jsx'
import Investments from './Investments.jsx'
import MontlyReport from './MontlyReport.jsx'
import Sidebar from './Sidebar.jsx'
import {SideBarContextProvider} from '../context/SideBarContext'

const Dashboard = () => {
  return (
    <div className='bg-[#121416]'>
        <SideBarContextProvider>
            <Header/>
        <main>
            <Sidebar/>
          <div>
            <Cards/>
            <MontlyReport/>
            <FeaturedSectors/>
            <ChartLine/>
          </div>
          <Investments/>
        </main>
        </SideBarContextProvider>
    </div>
  )
}

export default Dashboard