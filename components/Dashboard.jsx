import React from 'react'
import Header from './Header.jsx'
import Sidebar from './Sidebar.jsx'

const Dashboard = () => {
  return (
    <div className='bg-[#CBD5E1]'>
        <Header/>
        <main>
          <Sidebar/>
        </main>
        
    </div>
  )
}

export default Dashboard