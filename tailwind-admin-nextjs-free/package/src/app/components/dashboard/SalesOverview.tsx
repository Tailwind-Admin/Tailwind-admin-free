"use client"
import React, { useState } from 'react';
import dynamic from "next/dynamic";
import CardBox from '../shared/CardBox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesOverview = () => {
    const [selectedMonth, setSelectedMonth] = useState("Year 2025");

    const chartDataByMonth: Record<string, any> = {
        "Year 2025": {
            series: [
                { name: "Earnings", data: [1500, 2700, 2200, 3000, 1500, 1000, 1400, 2400, 1900, 2300, 1400, 1100] },
                { name: "Expense", data: [-1800, -1100, -2500, -1500, -600, -1800, -1200, -2300, -1900, -2300, -1200, -2500] },
            ],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            }
        },
        "Year 2024": {
            series: [
                { name: "Earnings", data: [2000, 2500, 2800, 3000, 2000, 1500, 2300, 1500, 1000, 1400, 2400, 1900] },
                { name: "Expense", data: [-1200, -1500, -2000, -1000, -800, -1300, -1500, -600, -1800, -1200, -2300, -1900] },
            ],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            }
        },
        "Year 2023": {
            series: [
                { name: "Earnings", data: [1800, 2200, 2600, 3000, 1700, 1200, 2000, 2500, 2800, 1800, 2000, 1500] },
                { name: "Expense", data: [-1500, -1300, -2200, -1200, -700, -1600, -1200, -1500, -2000, -1000, -800, -1300] },
            ],
            xaxis: {
                categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
            }
        },
    };

    const baseChartOptions = {
        chart: {
            toolbar: { show: false },
            type: "bar" as const,
            fontFamily: "inherit",
            foreColor: "#7C8FAC",
            height: 310,
            stacked: true,
            width: "100%",
            offsetX: -20,
        },
        colors: ["var(--color-primary)", "var(--color-secondary)"],
        plotOptions: {
            bar: {
                horizontal: false,
                barHeight: "60%",
                columnWidth: "20%",
                borderRadius: 6,
                borderRadiusApplication: 'end',
                borderRadiusWhenStacked: 'all',
            } as any,
        },
        dataLabels: { enabled: false },
        legend: { show: false },
        grid: {
            borderColor: "rgba(0,0,0,0.1)",
            strokeDashArray: 3,
        },
        yaxis: {
            min: -3000,
            max: 3000,
            tickAmount: 6,
            labels: {
                formatter: (val: number) => {
                    return `${val / 1000}k`;
                }
            }
        },
        tooltip: {
            theme: "dark",
            y: {
                formatter: (val: number) => {
                    return `${val}k`;
                }
            }
        },
    };

    const ChartData = {
        ...baseChartOptions,
        xaxis: {
            ...chartDataByMonth[selectedMonth].xaxis,
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
    };

    return (
        <CardBox className='pb-0 h-full w-full'>
            <div className="sm:flex items-center justify-between mb-6">
                <div>
                    <h5 className="card-title">Revenue updates</h5>
                    <p className='card-subtitle'>Overview of Profit</p>
                </div>
                <div className="sm:mt-0 mt-4">
                    <Select
                        value={selectedMonth}
                        onValueChange={(val:any) => setSelectedMonth(val)}
                    >
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Year 2025">Year 2025</SelectItem>
                            <SelectItem value="Year 2024">Year 2024</SelectItem>
                            <SelectItem value="Year 2023">Year 2023</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Chart
                options={ChartData}
                series={chartDataByMonth[selectedMonth].series}
                type="bar"
                height="316px"
                width={"100%"}
            />
        </CardBox>
    );
};

export default SalesOverview;
