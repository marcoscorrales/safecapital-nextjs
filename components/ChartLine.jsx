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

const ChartLine = ({text, labels, moneyData, lineColor, pointColor, bg}) => {

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
      text: text,
    },
  },
};


const data = {
  labels,
  datasets: [
    {
      label: text,
      data: moneyData,
      borderColor: lineColor,
      backgroundColor: pointColor,
    },
  ],
  options:{
    responsive: true,
    maintainAspectRadio : true
  }
};
   
  return (
    <div>
      <Line className={`bg-${bg} max-w-full mt-8 rounded-[1.6rem] p-[1.6rem]`} options={options} data={data} />
    </div>
        
  )
}

export default ChartLine