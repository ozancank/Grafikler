var options = {
  chart: {
    height: 380,
    width: "100%",
    type: "line",
    animations: {
      initialAnimation: {
        enabled: false,
      },
    },
  },
  series: [
    {
      name: "Zamana göre",
      data: [
        { x: "05/06/2014", y: 54 },
        { x: "05/08/2014", y: 17 },
        { x: "05/28/2014", y: 26 },
      ],
    },
  ],
  xaxis: {
    type: "datetime",
  },
};

var chart = new ApexCharts(document.querySelector("#chart6"), options);
chart.render();
