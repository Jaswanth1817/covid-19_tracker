import  React from 'react';

// Charts
// eslint-disable-next-line no-unused-vars
import  { Chart }  from 'chart.js/auto'
import { Line } from 'react-chartjs-2';


export const Charts = ({dailyData}) =>{
    const lineChart = (
        dailyData.length ?
        (
            <Line
            data={{
                labels: dailyData.map(({date})=> date),
                datasets: [{
                    data:dailyData.map(({confirmed})=> confirmed),
                    label:'Infected',
                    borderColor:'#3333ff',
                    fill:true,
                },
                {
                    data:dailyData.map(({recovered})=> recovered),
                    label:'Recovered',
                    borderColor:'green',
                    fill:true,
                },
                {
                    data:dailyData.map(({deceased})=> deceased),
                    label:'Deaths',
                    borderColor:'red',
                    fill:true,
                }
            ]
            }}
            />
        ):null
    )
    return(
        <div>
            {lineChart}
        </div>
    )
}

