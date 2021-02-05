Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});


function drawHighcharts() {
    Highcharts.chart("chart-container-january-stocks", { // add the proper ID here
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        series: [{
            name: 'Final 11 months',
            data: [29.9,5.7,-34.5,35,17.1,15.5,2.5,15.4,16.4],
            pointPadding: -.4,
            pointPlacement: -.15
        },{
            name: 'January',
            data: [-2.7,-2.5,-6.1,-8.6,-3.7,-3.6,-3.1,-5.1,-.2,-1.1],
            pointPadding: .2,
            pointPlacement: .2 
        }],
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1
            } 
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 10,
            y: -10,
            reversed: true
            // enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                },
                // edits xAxis ticks
                // dateTimeLabelFormats: {
                //     week: '%b. %e',
                // },
            },
            categories: [2003,2005,2008,2009,2010,2014,2015,2016,2020,2021],
            tickLength: 5,
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow',
                            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
            },
            min: -40,
            max: 40,
            tickAmount: 9,
            // adds commas to thousands
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            // valueSuffix: '',
            // valuePrefix: '',
            // valueDecimals: 2,
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -8,
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}