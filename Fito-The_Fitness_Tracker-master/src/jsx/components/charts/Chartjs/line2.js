import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: "My First dataset",
        data: [28, 35, 36, 48, 46, 42, 60],
        backgroundColor: "rgba(255,117,136,0.12)",
        borderColor: "#FF4961",
        borderWidth: 3,
        strokeColor: "#FF4961",
        capBezierPoints: !0,
        pointColor: "#fff",
        pointBorderColor: "#fff",
        pointBackgroundColor: "#FF4961",
        pointBorderWidth: 3,
        pointRadius: 5,
        pointHoverBackgroundColor: "#FFF",
        pointHoverBorderColor: "#FF4961",
        pointHoverRadius: 7
    }]
};


const options = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: {
        enabled: false,
    },
    legend: {
        display: false,
        labels: {
            usePointStyle: false,

        },


    },
    scales: {
        xAxes: [{
            display: false,
            gridLines: {
                display: false,
                drawBorder: false
            },
            scaleLabel: {
                display: false,
                labelString: 'Month'
            }
        }],
        yAxes: [{
            display: false,
            gridLines: {
                display: false,
                drawBorder: false
            },
            scaleLabel: {
                display: true,
                labelString: 'Value'
            }
        }]
    },
    title: {
        display: false,
    }
}
class LineChart2 extends Component {
    render() {
        return (
            <>
                <Line data={data} options={options} height={150} />
            </>
        );
    }

    // componentDidMount() {
    //     const { datasets } = this.refs.chart.chartInstance.data
    //     console.log(datasets[0].data);
    // }
}

export default LineChart2