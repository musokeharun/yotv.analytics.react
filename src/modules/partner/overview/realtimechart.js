import React from 'react';
import {getPosition} from "../../../utils/utils";
import ReactApex from "react-apexcharts";

const RealtimeChart = ({axisData, data}) => {

    const optionsLine = {
        chart: {
            height: 250,
            type: 'line',
            stacked: true,
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
            dropShadow: {
                enabled: true,
                opacity: 0.3,
                blur: 5,
                left: -7,
                top: 22
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 5,
        },
        grid: {
            padding: {
                left: 0,
                right: 0
            }
        },
        markers: {
            size: 0,
            hover: {
                size: 0
            }
        },
        series: [{
            name: 'Users',
            data: data
        },],
        xaxis: {
            type: 'datetime',
            categories: axisData
        },
        legend: {
            show: true,
            floating: true,
            horizontalAlign: 'left',
            onItemClick: {
                toggleDataSeries: false
            },
            position: 'top',
            offsetY: -28,
            offsetX: 60
        },
    };

    return <ReactApex/>;

}

RealtimeChart.defaultProps = {
    axisData: [],
    data: []
}

export default RealtimeChart;