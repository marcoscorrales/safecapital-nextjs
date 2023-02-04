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

const ChartLine = ({title, text, labels, moneyData, moneyData2 = null, lineColor, pointColor, bg}) => {

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
      text: title,
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

const data2 = {
  labels,
  datasets: [
    {
      label: text,
      data: moneyData,
      borderColor: lineColor,
      backgroundColor: pointColor,
    },
    {
      label: "SP500",
      data: moneyData2,
      borderColor: "green",
      backgroundColor: "rgb(0,128,0, 0.5)",
    },
  ],
  options:{
    responsive: true,
    maintainAspectRadio : true
  }
};
   
  return (
    <div>
      {
        moneyData2 === null ?
        <Line className={`${bg} max-w-full mt-8 rounded-[1.6rem] p-[1.6rem]`} options={options} data={data} />
        :
        <Line className={`${bg} max-w-full mt-8 rounded-[1.6rem] p-[1.6rem]`} options={options} data={data2} />
      }
      
    </div>
        
  )
}

export default ChartLine