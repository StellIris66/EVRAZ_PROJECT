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
        new Date('2025-05-10'),
        new Date('2025-05-11'),
        new Date('2025-05-12'),
        new Date('2025-05-13'),
        new Date('2025-05-14'),
        new Date('2025-05-15'),
        new Date('2025-05-16'),
        new Date('2025-05-17'),
        new Date('2025-05-18'),
        new Date('2025-05-19'),
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




