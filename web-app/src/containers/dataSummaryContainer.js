import React, { useState } from 'react'
import { Chart } from 'primereact/chart'
import { COLOR_HEADER } from '../constants/ColorConstant';


export function DataSummaryContainer(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    const [chartData] = useState({
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    });

    const [lightOptions] = useState({
        plugins: {
            legend: {
                labels: {
                    color: '#495057'
                }
            }
        },
        scales: {
            r: {
                pointLabels: {
                    color: '#495057',
                },
                grid: {
                    color: '#ebedef',
                },
                angleLines: {
                    color: '#ebedef'
                }
            }
        }
    });

    return (
        <div style={props.style}>
            <Chart type="radar"
                data={chartData}
                options={lightOptions}
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: "100%",
                    padding: "10px",
                    marginTop: "20px",
                }}
            />
        </div>
    )
}