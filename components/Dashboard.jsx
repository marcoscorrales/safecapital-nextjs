import React from 'react'
import Cards from './Cards.jsx'
import Header from './Header.jsx'
import MontlyReport from './MontlyReport.jsx'
import Sidebar from './Sidebar.jsx'

const Dashboard = () => {
  return (
    <div className='bg-[#CBD5E1]'>
        <Header/>
        <main>
          <Sidebar/>
          <Cards/>
          <MontlyReport/>
        </main>
        
    </div>
  )
}

export default Dashboard