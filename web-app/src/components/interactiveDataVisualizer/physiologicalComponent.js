import React, { useState } from 'react';
import Highcharts from 'highcharts/highstock';
import {
    HighchartsStockChart,
    Chart,
    HighchartsProvider,
    XAxis,
    YAxis,
    Title,
    Legend,
    AreaSplineSeries,
    SplineSeries,
    Navigator,
    RangeSelector,
    Tooltip
} from 'react-jsx-highstock';
import './css/physiologicalComponent.css';

const PhysiologicalComponent = () => {
    const data = [
        0,
        -0.03,
        -0.05,
        -0.05,
        0,
        0.13,
        0.36,
        0.66,
        1.01,
    ];
    const data1 = [
        0.108913,
        0.105069,
        0.102506,
        0.11532,
        0.123008,
        0.121726,
        0.124289,
        0.117882
    ];

    return (
        <HighchartsProvider Highcharts={Highcharts}>
            <HighchartsStockChart>
                <Chart
                    height={150}
                    zoomType="x" />

                <Tooltip />
                <XAxis
                    type="time"
                >
                </XAxis>
                <Legend></Legend>
                <YAxis>
                    <SplineSeries
                        color={"#aa4643"}
                        id="bvp" name="BVP" data={data} />
                </YAxis>
                <YAxis>
                    <SplineSeries
                        color={"#6bafc1"}
                        id="eda" name="EDA" data={data1} />
                </YAxis>

            </HighchartsStockChart>
        </HighchartsProvider>
    )
}

export default PhysiologicalComponent;