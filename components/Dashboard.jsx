import React from 'react'
import Cards from './Cards.jsx'
import FeaturedSectors from './FeaturedSectors.jsx'
import Header from './Header.jsx'
import MontlyReport from './MontlyReport.jsx'
import Sidebar from './Sidebar.jsx'

const Dashboard = () => {
  return (
    <div className='bg-[#CBD5E1]'>
        <Header/>
        <main>
          <Sidebar/>
          <div>
            <Cards/>
            <MontlyReport/>
            <FeaturedSectors/>
          </div>
        </main>
        
    </div>
  )
}

export default Dashboard