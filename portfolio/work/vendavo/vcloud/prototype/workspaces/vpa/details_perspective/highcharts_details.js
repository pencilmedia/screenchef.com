// Root cause chart
$(function() {
    $('#details-chart').highcharts({
        chart: {
            type: 'scatter',
            zoomType: 'xy',
            margin: 0
        },
        title: {
            text: null
        },
        xAxis: {
            title: {
                enabled: false
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                enabled: false
            }
        },
        tooltip: {
            enabled: true,
            useHTML: true,
            animation: false,
            formatter: function() {
                var tooltipText = $('#details-tooltip-small').html();

                return tooltipText;
            }
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                }
            },
            series: {
                point: {
                    events: {
                        click: function() {
                            hs.htmlExpand(null, {
                                pageOrigin: {
                                    x: this.pageX,
                                    y: this.pageY
                                },
                                maincontentText: $('#details-tooltip').html()
                            });
                        }
                    }
                }
            }
        },
        series: [{
            name: '',
            color: 'rgba(223, 83, 83, .5)',
            data: [
                [161.2, 51.6]
            ]
        }],
        credits: {
            enabled: false
        }
    });
});