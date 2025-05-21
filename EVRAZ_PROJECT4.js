var options = {
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

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();


var options = {
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

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();