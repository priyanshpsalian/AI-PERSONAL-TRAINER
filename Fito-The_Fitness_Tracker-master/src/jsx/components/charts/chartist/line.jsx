import React, { Component } from 'react';
import ChartistGraph from 'react-chartist';



function LineChart() {
    var data = {
        labels: ['Mon', 'Tues', 'Wednes', 'Thurs', 'Fri'],
        series: [
            [12, 9, 7, 8, 5],
            [2, 1, 3.5, 7, 3],
            [1, 3, 4, 5, 6]
        ]
    };

    var options = {
        fullWidth: true,
		height:250,
        chartPadding: {
            right: 20
        }
    };

    var type = 'Line'

    return (
        <>
            <ChartistGraph data={data} options={options} type={type} />
        </>
    )
}

export default LineChart;