let options = {
    series: [{
        name: "STOCK ABC",
        data: [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000]
    }],
    chart: {
        type: 'area',
        height: 290,
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
    labels: [
        new Date(''),
        new Date(''),
        new Date(''),
        new Date(''),
        new Date(''),
        new Date(''),
        new Date(''),
        new Date(''),
        new Date(''),
        new Date(''),
    ],
    xaxis: {
        type: 'date',
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


let option = {
    series: [70],
    chart: {
        height: 240,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    labels: ['NPS'],
};

let chart2 = new ApexCharts(document.querySelector("#chart2"), option);
chart2.render();




