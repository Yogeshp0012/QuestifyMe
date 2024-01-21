import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { NgApexchartsModule } from 'ng-apexcharts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent, NgApexchartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy{
    public chartOptions: any;
    public radialChartOptions: any;
    reward: string = "reward_1"
    rewardCount: number = 1;
    health: string = "Health_11"
    healthCount: number = 11;
    xp: string = "xp_21"
    xpCount: number = 21;
    timeInterval: any;
    lineOptions: any;
    knightCount: number = 0;
    character2: String = "knightattack" + this.knightCount;

    ngOnInit(){
        this.timeInterval = setInterval(() => {
            if (this.rewardCount < 10) {
                this.reward = "reward_" + (++this.rewardCount);
            }
            else {
                this.reward = "reward_" + (this.rewardCount = 1);
            }
            if (this.xpCount < 30) {
                this.xp = "xp_" + (++this.xpCount);
            }
            else {
                this.xp = "xp_" + (this.xpCount = 21);
            }
            if (this.healthCount < 20) {
                this.health = "Health_" + (++this.healthCount);
            }
            else {
                this.health = "Health_" + (this.healthCount = 11);
            }
            if(this.knightCount < 4){
                this.character2 = "knightattack" + (++this.knightCount);
            }
            else{
                this.character2 = "knightattack" + (this.knightCount = 0);
            }
        }, 200)
        this.chartOptions = {
            colors: ["#1A56DB", "#red"],
            series: [
              {
                name: "Completed",
                color: "#1A56DB",
                data: [
                  { x: "Mon", y: 2 },
                  { x: "Tue", y: 1 },
                  { x: "Wed", y: 6 },
                  { x: "Thu", y: 4 },
                  { x: "Fri", y: 3 },
                  { x: "Sat", y: 8 },
                  { x: "Sun", y: 1 },
                ],
              },
              {
                name: "Incomplete",
                color: "#FDBA8C",
                data: [
                  { x: "Mon", y: 2 },
                  { x: "Tue", y: 3 },
                  { x: "Wed", y: 4 },
                  { x: "Thu", y: 4 },
                  { x: "Fri", y: 2 },
                  { x: "Sat", y: 1 },
                  { x: "Sun", y: 3 },
                ],
              },
            ],
            chart: {
              type: "bar",
              height: "320px",
              fontFamily: "Inter, sans-serif",
              toolbar: {
                show: false,
              },
            },
            plotOptions: {
              bar: {
                horizontal: false,
                columnWidth: "70%",
                borderRadiusApplication: "end",
                borderRadius: 8,
              },
            },
            tooltip: {
              shared: true,
              intersect: false,
              style: {
                fontFamily: "Inter, sans-serif",
              },
            },
            states: {
              hover: {
                filter: {
                  type: "darken",
                  value: 1,
                },
              },
            },
            stroke: {
              show: true,
              width: 0,
              colors: ["transparent"],
            },
            grid: {
              show: false,
              strokeDashArray: 4,
              padding: {
                left: 2,
                right: 2,
                top: -14
              },
            },
            dataLabels: {
              enabled: false,
            },
            legend: {
              show: false,
            },
            xaxis: {
              floating: false,
              labels: {
                show: false,
                style: {
                  fontFamily: "Inter, sans-serif",
                  cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                }
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
            fill: {
              opacity: 1,
            }
        };

        this.radialChartOptions = {
            chart: {
              height: "100%",
              maxWidth: "100%",
              type: "line",
              fontFamily: "Inter, sans-serif",
              dropShadow: {
                enabled: false,
              },
              toolbar: {
                show: false,
              },
            },
            tooltip: {
              enabled: true,
              x: {
                show: false,
              },
            },
            dataLabels: {
              enabled: false,
            },
            grid: {
              show: true,
              strokeDashArray: 4,
              padding: {
                left: 2,
                right: 2,
                top: -26
              },
            },
            series: [
              {
                name: "Clicks",
                data: [6500, 6418, 6456, 6526, 6356, 6456],
                color: "#1A56DB",
              },
              {
                name: "CPC",
                data: [6456, 6356, 6526, 6332, 6418, 6500],
                color: "#7E3AF2",
              },
            ],
            legend: {
              show: false
            },
            stroke: {
                width: 6,
              curve: 'smooth'
            },
            xaxis: {
              categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
              labels: {
                show: true,
                style: {
                  fontFamily: "Inter, sans-serif",
                  cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                }
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              },
            },
            yaxis: {
              show: false,
            },
          }

          this.lineOptions = {
            series: [{
            name: 'Level',
            data: [0, 1]
          }],
            chart: {
            height: 350,
            type: 'line',
          },
          forecastDataPoints: {
            count: 7
          },
          stroke: {
            width: 5,
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001','4/11/2001' ,'5/11/2001' ,'6/11/2001'],
            tickAmount: 10,
            labels: {
                show:false,
              formatter: function(value: any, timestamp: any, opts: any) {
                return opts.dateFormatter(new Date(timestamp), 'dd MMM')
              }
            }
          },
          title: {
            text: 'Forecast',
            align: 'left',
            style: {
              fontSize: "16px",
              color: '#666'
            }
          },
          fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
              gradientToColors: [ '#FDD835'],
              shadeIntensity: 1,
              type: 'horizontal',
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 10, 10, 10]
            },
          },
          yaxis: {
            min: -10,
            max: 40
          },
          grid: {
            show: false,
            strokeDashArray: 4,
            padding: {
              left: 2,
              right: 2,
              top: 0
            },
          },
          };
    }
    ngOnDestroy(): void {
        if(this.timeInterval){
            clearInterval(this.timeInterval);
        }
    }
}
