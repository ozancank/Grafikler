var options = {
  chart: {
    height: 380,
    width: "100%",
    type: "line",
    animations: {
      initialAnimation: {
        enabled: false
      }
    }
  },
  series: [
    {
      name: "Zamana göre",
      data: [
        [1324508400000, 34],
        [1324594800000, 54],
        [1326236400000, 43],
      ],
    }
  ],
  xaxis: {
    type: "datetime",
  },
};

var chart = new ApexCharts(document.querySelector("#chart5"), options);
chart.render();
