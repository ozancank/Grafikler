var options = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "doğrunun ilk ve son noktası",
      data: [
        {
          x: 20,
          y: 54,
        },
        {
          x: 30,
          y: 66,
        },
        {
          x: 60,
          y: 6,
        },
      ],
    },
  ],
  xaxis: {
    type: "numeric",
  },
};

var chart = new ApexCharts(document.querySelector("#chart3"), options);
chart.render();
