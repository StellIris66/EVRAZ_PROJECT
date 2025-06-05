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
    colors: ['#3989D2FF', '#3989D2FF'],
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

let chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
chart1.render();


let options2 = {
    series: [25, 25, 25, 25], // Делим на 4 равные части (25%, 50%, 75%, 100%)
    chart: {
        height: 200,
        type: 'donut',
        toolbar: {show: false}
    },
    colors: ['#ff8800', '#ff8800', '#ff8800', '#ffffff'], // Цвета для каждой зоны
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
    },
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
        height: 300,
        width:615,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },

    labels: [
        new Date().toLocaleDateString(),
        new Date().toLocaleDateString(),
        new Date().toLocaleDateString(),
        new Date().toLocaleDateString(),
        new Date().toLocaleDateString(),
        new Date().toLocaleDateString(),
        new Date().toLocaleDateString(),
        new Date().toLocaleDateString(),
        new Date().toLocaleDateString(),
        new Date().toLocaleDateString(),
    ],
    xaxis: {
        type: 'date',
        labels:{
            style:{
                colors:['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']
            }
        }
    },
    yaxis: {
        opposite: true,
        labels:{
            style:{
                colors:['white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white', 'white']
            }
        }
    },
    tooltip: {
        enabled: false,
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
            },
            dataLabels: {
                showOn: "always",
                value: {
                    color: "#fff",
                }
            }
        },
    },
    labels: ['NPS'],
};

let chart4 = new ApexCharts(document.querySelector("#chart3"), options4);
chart4.render();