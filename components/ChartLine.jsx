import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'SP500 2022',
    },
  },
};

const labels = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];

const data = {
  labels,
  datasets: [
    {
      label: 'SP500',
      data: ['4600', '4546', '4300', '4545', '4155', '4100', '3825', '4118', '3966', '3585', '3855', '4075'],
      borderColor: 'red',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
  options:{
    responsive: true,
    maintainAspectRadio : true
  }
};

const ChartLine = () => {
   
  return (
    <div >
      <Line className='bg-white max-w-full mt-8 rounded-[1.6rem] p-[1.6rem]' options={options} data={data} />
    </div>
        
  )
}

export default ChartLine