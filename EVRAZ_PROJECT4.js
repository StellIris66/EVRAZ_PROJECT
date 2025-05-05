let options = {
    series: [{
        name: "STOCK ABC",
        data: ['1', '2', '3', '4']
    }],
    chart: {
        type: 'area',
        height: 350,
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },

    title: {
        text: 'Fundamental Analysis of Stocks',
        align: 'left'
    },
    subtitle: {
        text: 'Price Movements',
        align: 'left'
    },
    labels: ['1', '2', '3', '4'],
    xaxis: {
        type: 'datetime',
    },
    yaxis: {
        opposite: true
    },
    legend: {
        horizontalAlign: 'left'
    }
};

let chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

