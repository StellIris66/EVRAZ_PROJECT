let options1 = {
    series: [100, 20],
    chart: {
        height: 250,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: '45%',
                background: 'transparent',
                image: undefined,
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    show: false,
                }
            },
            barLabels: {
                enabled: true,
                useSeriesColors: true,
                offsetX: -8,
                fontSize: '8.5px',
                formatter: function (seriesName, opts) {
                    return seriesName
                },
            },
        }
    },
    colors: ['#36bae5', '#36bae5'],
    labels: ['ИНТЕГРАЦИЯ С САЙТОМ ВДЕЛО', 'ВИРТУАЛЬНАЯ АТС МЕГАФОН'],
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                show: false
            }
        }
    }]
};

var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
chart1.render();


let options2 = {
    series: [25, 25, 25, 25], // Делим на 4 равные части (25%, 50%, 75%, 100%)
    chart: {
        height: 200,
        type: 'donut',
        toolbar: {show: false}
    },
    colors: ['#00CED1', '#FFFF99', '#FF8C00', '#8B0000'], // Цвета для каждой зоны
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: false // Отключаем метки в центре
                }
            },
            startAngle: -90, // Начало дуги
            endAngle: 90   // Конец дуги (полукруг)
        }
    },
    dataLabels: {
        enabled: false // Отключаем стандартные метки
    },
    legend: {
        show: false // Отключаем легенду
    },
    tooltip: {
        enabled: false // Отключаем всплывающие подсказки
    }
}

function s1(){
    let strelka = document.getElementById('strelka')
    strelka.style.transform = 'rotate(-45deg)'
}

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();
s1();

let options3 = {
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

let chart3 = new ApexCharts(document.querySelector("#chart"), options3);
chart3.render();

let options4 = {
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

let chart4 = new ApexCharts(document.querySelector("#chart3"), options4);
chart4.render();