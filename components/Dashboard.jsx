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
  const labels = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  const data = ['4600', '4546', '4300', '4545', '4155', '4100', '3825', '4118', '3966', '3585', '3855', '4075'];
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
            <ChartLine text={'SP500'} labels={labels} moneyData={data} lineColor={'red'} pointColor={'rgba(255, 99, 132, 0.5)'} bg={'gray-300'}/>
          </div>
          <Investments/>
        </main>
        </SideBarContextProvider>
    </div>
  )
}

export default Dashboard