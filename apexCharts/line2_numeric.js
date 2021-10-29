var options = {
  chart: {
    type: "line",
  },
  series: [
    {
      name: "koordinat noktaları ile",
      data: [
        [1, 34],
        [3, 54],
        [5, 23],
        [15, 43],
      ],
    },
  ],
  xaxis: {
    type: "numeric",
  },
};

var chart = new ApexCharts(document.querySelector("#chart2"), options);
chart.render();
