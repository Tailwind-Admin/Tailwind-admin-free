$(function () {
    //
    // Carousel
    //
    $(".counter-carousel").owlCarousel({
        loop: true,
        margin: 24,
        mouseDrag: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 2000,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2,
                loop: true,
            },
            576: {
                items: 2,
                loop: true,
            },
            768: {
                items: 3,
                loop: true,
            },
            1200: {
                items: 5,
                loop: true,
            },
            1400: {
                items: 6,
                loop: true,
            },
        },
    });


    var chart = {
        series: [
            {
                name: 'Eanings this month',
                data: [1500, 2700, 2200, 3000, 1500, 1000, 1400, 2400, 1900, 2300, 1400, 1100],
                color: 'var(--color-primary)',
            },
            {
                name: 'Expense this month',
                data: [-1800, -1100, -2500, -1500, -600, -1800, -1200, -2300, -1900, -2300, -1200, -2500],
                color: 'var(--color-secondary)',
            },
        ],

        chart: {
            type: 'bar',
            fontFamily: "inherit",
            foreColor: '#adb0bb',
            toolbar: {
                show: false,
            },
            height: 328,
            stacked: true,
        },

        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: "60%",
                columnWidth: "20%",
                borderRadius: 6,
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all',
            },
        },

        stroke: {
            show: false,
        },
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
        grid: {
            borderColor: 'rgba(0,0,0,0.1)',
            strokeDashArray: 3,
            xaxis: {
                lines: {
                    show: false,
                },
            },
        },
        yaxis: {
            min: -3000,
            max: 3000,
            tickAmount: 6,
            labels: {
                formatter: function (val) {
                    return (val / 1000) + "k";
                }
            }
        },
        xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            axisBorder: {
                show: false,
            },
        },
        tooltip: {
            theme: "dark",
            y: {
                formatter: function (val) {
                    return val + "k";
                }
            }
        },
    };

    var chart = new ApexCharts(document.querySelector("#revenue-updates"), chart);
    chart.render();



    // =====================================
    // Breakup
    // =====================================
    var breakup = {
        color: "#adb5bd",
        series: [38, 40, 25],
        labels: ["2023", "2022", "2025"],
        chart: {
            height: 170,
            type: "donut",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        plotOptions: {
            pie: {
                startAngle: 0,
                endAngle: 360,
                donut: {
                    size: '75%',
                },
            },
        },
        stroke: {
            show: false,
        },

        dataLabels: {
            enabled: false,
        },

        legend: {
            show: false,
        },
        colors: ["var(--color-primary)", "var(--color-lightprimary)", "var(--color-secondary)"],

        responsive: [
            {
                breakpoint: 991,
                options: {
                    chart: {
                        width: 120,
                    },
                },
            },
        ],
        tooltip: {
            theme: "dark",
            fillSeriesColor: false,
        },
    };

    var chart = new ApexCharts(document.querySelector("#breakup"), breakup);
    chart.render();


    // =====================================
    // Earning
    // =====================================
    var earning = {
        chart: {
            id: "sparkline3",
            type: "area",
            height: 60,
            sparkline: {
                enabled: true,
            },
            group: "sparklines",
            fontFamily: "inherit",
            foreColor: "#adb0bb",
        },
        series: [
            {
                name: "Earnings",
                color: "var(--color-secondary)",
                data: [25, 66, 20, 40, 12, 58, 20],
            },
        ],
        stroke: {
            curve: "smooth",
            width: 2,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 0,
                inverseColors: false,
                opacityFrom: 0.1,
                opacityTo: 0,
                stops: [20, 180],
            },
            opacity: 0.5,
        },

        markers: {
            size: 0,
        },
        tooltip: {
            theme: "dark",
            fixed: {
                enabled: true,
                position: "right",
            },
            x: {
                show: false,
            },
        },
    };
    new ApexCharts(document.querySelector("#earning"), earning).render();

});