import React, { useEffect, useState } from 'react'
import Cards from './Cards.jsx'
import ChartLine from './ChartLine.jsx'
import FeaturedSectors from './FeaturedSectors.jsx'
import Header from './Header.jsx'
import Investments from './Investments.jsx'
import MontlyReport from './MontlyReport.jsx'
import Sidebar from './Sidebar.jsx'
import {SideBarContextProvider} from '../context/SideBarContext'
import axios from 'axios'

const Dashboard = () => {
  const labels = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  const data = ['4600', '4546', '4300', '4545', '4155', '4100', '3825', '4118', '3966', '3585', '3855', '4075'];

  const [labelsData, setLabelsData] = useState([]);
  const [stockData, setStockData] = useState([]);

    useEffect (()=>{

    const getStockData = async () =>{
      const API_KEY = 'IN0R92YE14FU4WTQ';
      let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=SPY&apikey=${API_KEY}&datatype=json&outputsize=12`
  
      const response = await axios.get(`${API_Call}`);
       //Obtengo los doce ultimos meses
       setStockData(Object.entries(response.data["Monthly Time Series"]).slice(0, 12).map(entry => entry[1]["4. close"]*10).reverse());
       setLabelsData(Object.entries(response.data["Monthly Time Series"]).slice(0, 12).map(entry => entry[0]).reverse());
    }

      getStockData();
    }, [])

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
            <ChartLine text={'SP500'} labels={labelsData} moneyData={stockData} lineColor={'red'} pointColor={'rgba(255, 99, 132, 0.5)'} bg={'gray-300'}/>
          </div>
          <Investments/>
        </main>
        </SideBarContextProvider>
    </div>
  )
}

export default Dashboard

//Ejecuta la función antes de renderizar el componente 
export async function getServerSideProps(){
  await fetchStock();
}