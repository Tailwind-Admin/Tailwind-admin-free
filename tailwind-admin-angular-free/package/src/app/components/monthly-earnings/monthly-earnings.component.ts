import { Component, ViewChild } from '@angular/core';
import {
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexStroke,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexPlotOptions,
  ApexResponsive,
  ApexFill,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { TablerIconsModule } from 'angular-tabler-icons';
import { MaterialModule } from 'src/app/material.module';

export interface monthlyChart {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  fill: ApexFill;
  responsive: ApexResponsive;
}

@Component({
  selector: 'app-monthly-earnings',
  imports: [NgApexchartsModule, MaterialModule, TablerIconsModule],
  templateUrl: './monthly-earnings.component.html',
})
export class AppMonthlyEarningsComponent {
  @ViewChild('chart') chart: ChartComponent = Object.create(null);
  public monthlyChart!: Partial<monthlyChart> | any;

  constructor() {
    this.monthlyChart = {
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
          color: "var(--mat-sys-secondary)",
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
          opacityFrom: 0.15,
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
  }
}
