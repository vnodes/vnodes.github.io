import type { Meta, StoryObj } from '@storybook/angular';
import { Chart, ChartData, ChartType, registerables } from 'chart.js';
import { ChartComponent } from './chart';


Chart.register(...registerables);

const meta: Meta<ChartComponent<ChartType, ChartData<ChartType>>> = {
  component: ChartComponent,
  title: 'Report/Chart',
};

export default meta;

type Story<TChartType extends ChartType> = StoryObj<ChartComponent<TChartType, ChartData<TChartType>>>;

export const BarChart: Story<'bar' | 'line'> = {
  args: {
    type: 'bar',
    data: {
      labels: ["1", '2', '3', '4'],
      datasets: [
        { label: "Second", data: [100, 50, 50, 100], backgroundColor: "blue", borderRadius: 100 },
        { label: "First", data: [100, 50, 50, 100], backgroundColor: "orange", borderRadius: 100 },
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          title: {
            text: "y Title"
          },
        },
        x: {
          title: { text: "X Title" }
        }
      }
    },
  }
};



export const LineChart: Story<'line'> = {
  args: {
    type: "line",
    data: {
      labels: ["1", '2', 'm', '3', '4'],
      datasets: [
        { label: "First", data: [100, 50, 0, 50, 30], backgroundColor: "orange", borderColor: 'orange', borderCapStyle: 'round', borderDash: [1, 10] },
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          title: {
            text: "y Title"
          },
        },
        x: {
          title: { text: "X Title" }
        }
      }
    },
  }
};



export const PieChart: Story<'pie'> = {
  args: {
    type: "pie",
    data: {
      labels: [
        'orange', 'teal', 'crimson', 'cyan', 'purple'
      ],
      datasets: [
        {
          label: "Color Pie",
          data: [20, 20, 20, 20, 20],
          backgroundColor: [
            'orange', 'teal', 'crimson', 'cyan', 'purple'
          ]
        },
      ]
    },

    options: {
      responsive: true,

    },
  }
};



export const DoughnutChart: Story<'doughnut'> = {
  args: {
    type: "doughnut",
    data: {
      labels: [
        'orange', 'teal', 'crimson', 'cyan', 'purple'
      ],
      datasets: [
        {
          label: "Color Pie",
          data: [25, 15, 20, 15, 20],
          backgroundColor: [
            'orange', 'teal', 'crimson', 'cyan', 'purple'
          ]
        },
      ]
    },

    options: {
      responsive: true,

    },
  }
};

export const PolarAreaChart: Story<'polarArea'> = {
  args: {
    type: "polarArea",
    data: {
      labels: [
        'orange', 'teal', 'crimson', 'cyan', 'purple'
      ],
      datasets: [
        {
          label: "Color Pie",
          data: [25, 15, 20, 15, 20],
          backgroundColor: [
            'orange', 'teal', 'crimson', 'cyan', 'purple'
          ]
        },
      ]
    },

    options: {
      responsive: true,

    },
  }
};

export const RadarChart: Story<'radar'> = {
  args: {
    type: "radar",
    data: {
      labels: [
        'orange', 'teal', 'crimson', 'cyan', 'purple',
      ],
      datasets: [
        {
          label: "Colors",

          data: [25, 15, 20, 15, 20],
          pointBackgroundColor: [
            'orange', 'teal', 'crimson', 'cyan', 'purple'
          ],
          pointRadius: 5,

          showLine: false,
          backgroundColor: 'lightgreen',
          pointBorderColor: [
            'orange', 'teal', 'crimson', 'cyan', 'purple'
          ]
        },
      ]
    },

    options: {
      responsive: true
    },
  }
};


