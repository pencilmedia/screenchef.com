// tap off pie chart popover
var isVisible = false;
var clickedOutside = false;

var midas_charts = {};
midas_charts = {
    init: function() {
        midas_charts.togglePiechartPopover();
        midas_charts.toggleTarget();
        midas_charts.showTargetSlider();
        midas_charts.toggleLineCharts();

        $('.to-do-list-action').on("click", function() {
            shell.openRtPanel();
        });
    },
    togglePiechartPopover: function() {
        //TODO: Remove when we update to bootstrap 2.3.2+, it has 'click hover' for triggering popovers
        $(document).bind("click", function(e) {
            if (isVisible) {
                if (!clickedOutside) {
                    clickedOutside = true;
                }

                if (clickedOutside) {
                    midas_charts.hideAllPopovers();
                    clickedOutside = false;
                }
            }
        });
        $('#annulus a').on("click", function(e) {
            if (!isVisible) {
                $('#chart-container').popover({
                    animation: 'true',
                    html: 'true',
                    trigger: 'click',
                    placement: 'left',
                    title: 'Total Margin Opportunity: $14.2m',
                    content: function() {
                        return '<div class="popoverButtonContainer"><div data-id="2" class="popoverButton cogs"><div class="left"></div><span class="percentage">15%</span><span>Cost of Goods Sold</span></div><div data-id="1" class="popoverButton negotiatedDiscount"><div class="left"></div><span class="percentage">12%</span><span>Negotiated Discount</span></div><div data-id="12" class="popoverButton freightCharges"><div class="left"></div><span class="percentage">2%</span><span>Freight Charges</span></div><div data-id="11" class="popoverButton pocketPriceAdjustments"><div class="left"></div><span class="percentage">6%</span><span>Pocket Price Adjustments</span></div><div data-id="10" class="popoverButton serviceCost"><div class="left"></div><span class="percentage">12%</span><span>Service Costs</span></div><div data-id="9" class="popoverButton freightCost"><div class="left"></div><span class="percentage">5%</span><span>Freight Costs</span></div><div data-id="8" class="popoverButton paymentCost"><div class="left"></div><span class="percentage">13%</span><span>Payment Costs</span></div><div data-id="7" class="popoverButton netPriceAdjustments"><div class="left"></div><span class="percentage">8%</span><span>Net Price Adjustments</span></div><div data-id="6" class="popoverButton rebates"><div class="left"></div><span class="percentage">2%</span><span>Rebates</span></div><div data-id="5" class="popoverButton invoicePriceAdjustments"><div class="left"></div><span class="percentage">13%</span><span>Invoice Price Adjustments</span></div><div data-id="4" class="popoverButton serviceCharges"><div class="left"></div><span class="percentage">7%</span><span>Service Charges</span></div><div data-id="3" class="popoverButton surcharges"><div class="left"></div><span class="percentage">5%</span><span>Surcharges</span></div></div>';
                    }
                });

                $('#chart-container').popover('show');

                isVisible = true;

                $('.popover').bind('click', function() {
                    clickedOutside = false;
                });

                $('#annulus a').bind('click', function() {
                    clickedOutside = false;
                });

                e.stopPropagation();
            }
        });

        $('.popoverButton').bind("mouseover", function() {
            button_id = $(this).attr('data-id');

            var chart = $('#donut').highcharts();
            chart.series[0].data[button_id - 1].slice(true);
        });

        $('.popoverButton').bind("mouseleave", function() {
            button_id = $(this).attr('data-id');

            var chart = $('#donut').highcharts();
            chart.series[0].data[button_id - 1].slice(false);
        });

        $('.popoverButton').bind("click", function() {
            button_id = $(this).attr('data-id');

            $(this).siblings().removeClass("selected");
            $(this).addClass("selected");

            $('.form-inline select').children('.dynamic').remove();

            var label = $(this).children('span').text().split("-")[1];

            $('.form-inline select').append('<option class="dynamic" selected value="">' + label + '</option>');
            $('.form-inline select').trigger("liszt:updated");

            midas_charts.hideAllPopovers();
            clickedOutside = false;

            var chart = $('#donut').highcharts();
            chart.series[0].data[button_id - 1].slice(false);

            $(this).stopPropagation();
        });
    },
    hideAllPopovers: function() {
        $('#chart-container').each(function() {
            $(this).popover('hide');
            isVisible = false;
        });
    },
    toggleTarget: function() {
        $('.target-edit').hide();
        $('.target-data').on("click", function() {
            $('.target-data').hide();
            $('.target-edit').show();
        });
        $('.target-save').on("click", function() {
            $('.target-edit').hide();
            $('.target-data').show();
        });
    },
    showTargetSlider: function() {
        $('#SL').slider({
            max: 5000000,
            step: 100000,
            value: 3000000,
            tooltip: 'hide',
            orientation: 'horizontal',
            handle: 'square'
        }).on('slide', function(ev) {
            var sliderValue = $('#SL').slider('getValue');
            sliderValue = '$' + sliderValue[0].value.toLocaleString();

            $('span.value').text(sliderValue);
        });
    },
    toggleLineCharts: function() {
        $('#watchlist-graph input').on("click", function() {
            var chart = $('#line-graph').highcharts();
            var element_index = $(this).parents('li').index();

            console.log(element_index);

            if ($(this).is(":checked")) {
                chart.series[element_index].show();
            } else {
                chart.series[element_index].hide();
            }
        });
    }
};
$(midas_charts.init);

$(function() {
    var colors = Highcharts.getOptions().colors,
        categories = ['Negotiated Discount', 'Cost of Goods Sold', 'Surcharges', 'Service Charges', 'Invoice Price Adjustments', 'Rebates', 'Net Price Adjustmentsxx sadhfjshdjfhsdjfhasdfjkh', 'Payment Costs', 'Freight Costs', 'Service Costs', 'Pocket Price Adjustments', 'Freight Charges'],
        data = [{
            y: 12.00,
            color: '#C90745'
        }, {
            y: 15.00,
            color: '#8B132A'
        }, {
            y: 5.00,
            color: '#193357'
        }, {
            y: 7.00,
            color: '#1639AA'
        }, {
            y: 13.00,
            color: '#007AD2'
        }, {
            y: 2.00,
            color: '#45AEEF'
        }, {
            y: 8.00,
            color: '#95C7FA'
        }, {
            y: 13.00,
            color: '#C1DBFC'
        }, {
            y: 5.00,
            color: '#FCD2CA'
        }, {
            y: 12.00,
            color: '#F6B7A0'
        }, {
            y: 6.00,
            color: '#F0725A'
        }, {
            y: 2.00,
            color: '#F81F44'
        }];


    // Build the data arrays
    var browserData = [];
    var versionsData = [];
    for (var i = 0; i < data.length; i++) {

        // add browser data
        browserData.push({
            name: categories[i],
            y: data[i].y,
            color: data[i].color
        });
    }

    // Create the chart
    $('#donut').highcharts({
        chart: {
            type: 'pie'
        },
        title: false,
        plotOptions: {
            pie: {
                shadow: false,
                center: ['50%', '50%']
            },
            series: {
                point: {
                    events: {
                        mouseOver: function() {
                            this.slice(true);
                        },
                        mouseOut: function() {
                            this.slice(false);
                        },
                        click: function() {
                            $('.form-inline select').children('.dynamic').remove();

                            var label = this.name;

                            $('.form-inline select').append('<option class="dynamic" selected value="">' + label + '</option>');
                            $('.form-inline select').trigger("liszt:updated");

                            if (isVisible) {
                                midas_charts.hideAllPopovers();
                            };

                            this.slice(false);
                        }
                    }
                }
            }
        },
        tooltip: {
            formatter: function() {
                return this.point.name + ' - ' + this.point.y + '%';;
            },
            backgroundColor: '#1A1A1A',
            borderColor: '#1A1A1A',
            borderRadius: 6,
            valueDecimals: 0,
            style: {
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '11px',
                whiteSpace: 'normal',
                wordWrap: 'break-word',
                width: '275px'
            },
            hideDelay: 100,
            positioner: function(boxWidth, boxHeight, point) {
                var chartWidth = this.chart.plotLeft + this.chart.plotWidth;
                var chartHeight = this.chart.plotTop + this.chart.plotHeight;

                if (point.plotX < (chartWidth / 2)) {
                    //left
                    newX = point.plotX - boxWidth - 10;
                } else {
                    //right
                    newX = point.plotX + 25;
                }

                if (point.plotY < (chartHeight / 2)) {
                    //top
                    newY = point.plotY - 40;
                } else {
                    //down
                    newY = point.plotY + boxHeight + 10;
                }

                newX = (newX < 0) ? 0 : newX;
                newX = (newX > (chartWidth - boxWidth - 10)) ? (chartWidth - boxWidth) : newX;

                newY = (newY < 0) ? 0 : newY;
                newY = (newY > (chartHeight - boxHeight)) ? (chartHeight - boxHeight) : newY;

                newY = ((newY > 50) && (newY < (chartHeight / 2))) ? 50 : newY;
                newY = ((newY < 220) && (newY > (chartHeight / 2))) ? 220 : newY;

                return {
                    x: newX,
                    y: newY
                };
            }
        },
        series: [{
            name: false,
            data: browserData,
            size: '90%',
            innerSize: '50%',
            dataLabels: false
        }],
        credits: {
            enabled: false
        }
    });
});
$(function() {
    $('#bar-graph').highcharts({
        title: {
            align: 'left',
            text: 'Pocket Margin (USD)',
            style: {
                fontSize: '12px'
            }
        },
        chart: {
            height: 100,
            type: 'column',
            width: 800
        },
        xAxis: {
            labels: {
                enabled: false
            },
            tickLength: 0,
            startOnTick: true,
            min: 0,
            max: 8
        },
        yAxis: {
            title: {
                enabled: false
            },
            plotLines: [{
                value: 214,
                width: 2,
                color: '#66a86b',
                zIndex: 5,
                label: {
                    text: 'Target',
                    align: 'right',
                    style: {
                        color: '#66a86b',
                        fontWeight: 'bold'
                    }
                }
            }, {
                value: 207,
                width: 2,
                color: '#b6c3c9',
                zIndex: 5,
                dashStyle: 'shortdash',
                label: {
                    text: 'Baseline',
                    align: 'right',
                    style: {
                        color: '#b6c3c9',
                        fontWeight: 'bold'
                    }
                }
            }, {
                value: 205,
                width: 2,
                color: '#b0b8bb'
            }],
            min: 205,
            max: 215,
            tickInterval: 5,
            tickColor: '#e9eaec'
        },
        plotOptions: {
            series: {
                pointWidth: 55
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        colors: [
            '#183257'
        ],
        series: [{
            data: [null, null, {
                    x: 2,
                    y: 208
                }, {
                    x: 3,
                    y: 210
                }, {
                    x: 4,
                    y: 211
                }, {
                    x: 5,
                    y: 214
                }, {
                    x: 6,
                    y: 215
                },
                null, null
            ],
            pointWidth: 55
        }],
        credits: {
            enabled: false
        }
    });
});

$(function() {
    $('#line-graph').highcharts({
        title: {
            align: 'left',
            text: 'Pocket Margin (USD)',
            style: {
                fontSize: '12px'
            }
        },
        chart: {
            height: 300,
            type: 'line',
            width: 800
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Time',
                align: 'high'
            },
            labels: {
                enabled: false
            },
            tickLength: 0,
            plotBands: [{
                color: '#ebeff2',
                from: 1.7,
                to: 2.3
            }, {
                color: '#ebeff2',
                from: 2.7,
                to: 3.3
            }, {
                color: '#ebeff2',
                from: 3.7,
                to: 4.3
            }, {
                color: '#ebeff2',
                from: 4.7,
                to: 5.3
            }, {
                color: '#ebeff2',
                from: 5.7,
                to: 6.3
            }]
        },
        yAxis: {
            title: {
                enabled: false
            },
            plotLines: [{
                value: 0,
                width: 2,
                color: '#b0b8bb'
            }],
            min: 0,
            max: 10,
            tickInterval: 2,
            minorTickInterval: 1,
            minorTickColor: '#e9eaec',
            tickColor: '#e9eaec'
        },
        legend: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        colors: [
            '#183257',
            '#1375bc',
            '#ce0645',
            '#7a1d2f'
        ],
        series: [{
            data: [null, null, 5.1, 5.3, 6.9, 6.3, 5.6, null, null],
            marker: {
                symbol: 'circle'
            }
        }, {
            data: [null, null, 3.2, 4.2, 4.9, 5.6, 5.5, null, null],
            marker: {
                symbol: 'circle'
            }
        }, {
            data: [null, null, 2.5, 3.5, 4.4, 4.9, 4.8, null, null],
            marker: {
                symbol: 'circle'
            }
        }, {
            data: [null, null, 1.9, 2.5, 2.4, 2.9, 1.8, null, null],
            marker: {
                symbol: 'circle'
            }
        }],
        credits: {
            enabled: false
        }
    });
});