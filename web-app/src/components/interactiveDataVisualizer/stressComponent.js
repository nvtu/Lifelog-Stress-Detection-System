import React, { useState } from 'react';
import { Chart } from 'primereact/chart';

const StressBarChart = () => {
    const [basicData] = useState({
        labels: ['Affective-State'],
        datasets: [
            {
                label: 'Stress',
                backgroundColor: '#42A5F5',
                data: [100]
            },
            {
                label: 'Neutral',
                backgroundColor: '#FFA726',
                data: [28]
            }
        ]
    });


    const getLightTheme = () => {
        let basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: .8,
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };


        return {
            basicOptions,
        }
    }

    const { basicOptions } = getLightTheme();

    return (
        <div style={{ margin: "5%" }}>
            <h5>Affective State Analysis</h5>
            <Chart type="bar" data={basicData} options={basicOptions} />
        </div>
    )
}


export default StressBarChart;