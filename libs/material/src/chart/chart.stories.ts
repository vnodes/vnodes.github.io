import { Meta, StoryObj } from '@storybook/angular';
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
      labels: ["Mon", 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        { label: "API Requests", data: [1240, 1580, 1420, 1900, 2100, 850, 720], backgroundColor: "blue", borderRadius: 100 },
        { label: "Database Queries", data: [800, 950, 1100, 1300, 1450, 400, 350], backgroundColor: "orange", borderRadius: 100 },
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          title: {
            text: "Request Count"
          },
        },
        x: {
          title: { text: "Days of Week" }
        }
      }
    },
  }
};

export const LineChart: Story<'line'> = {
  args: {
    type: "line",
    data: {
      labels: ["Jan", 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        { label: "Active Users", data: [450, 520, 610, 590, 820, 950], backgroundColor: "orange", borderColor: 'orange', borderCapStyle: 'round', borderDash: [1, 10] },
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          title: {
            text: "User Count"
          },
        },
        x: {
          title: { text: "H1 2026" }
        }
      }
    },
  }
};

export const PieChart: Story<'pie'> = {
  args: {
    type: "pie",
    data: {
      labels: ['PostgreSQL', 'Redis', 'Elasticsearch', 'S3 Storage', 'MongoDB'],
      datasets: [
        {
          label: "Resource Allocation",
          data: [45, 15, 20, 10, 10],
          backgroundColor: ['orange', 'teal', 'crimson', 'cyan', 'purple']
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
      labels: ['TypeScript', 'HTML/CSS', 'Python', 'Go', 'Rust'],
      datasets: [
        {
          label: "Repo Language Distribution",
          data: [60, 15, 10, 10, 5],
          backgroundColor: ['orange', 'teal', 'crimson', 'cyan', 'purple']
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
      labels: ['North America', 'Europe', 'Asia', 'South America', 'Africa'],
      datasets: [
        {
          label: "Traffic by Region",
          data: [40, 30, 15, 10, 5],
          backgroundColor: ['orange', 'teal', 'crimson', 'cyan', 'purple']
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
      labels: ['Performance', 'Security', 'Reliability', 'Scalability', 'Maintainability'],
      datasets: [
        {
          label: "System Health Score",
          data: [90, 85, 70, 80, 95],
          pointBackgroundColor: ['orange', 'teal', 'crimson', 'cyan', 'purple'],
          pointRadius: 5,
          showLine: false,
          backgroundColor: 'lightgreen',
          pointBorderColor: ['orange', 'teal', 'crimson', 'cyan', 'purple']
        },
      ]
    },
    options: {
      responsive: true
    },
  }
};