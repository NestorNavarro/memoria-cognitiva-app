import Chart from "react-apexcharts";

const TestChart = ({ dataTest }) => {
  const options = {
    series: [
      {
        name: "Puntuación",
        data: [36, 50, 48, 65, 55, 40, 30, 28, 7, 5, 1],
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "bar",
      },
      dataLabels: {
        enabled: true,
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },

      yaxis: {
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
        },
      },
      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    },
  };
  return <Chart options={options} series={options.series} height={400} type="bar" />;
};

export default TestChart;
