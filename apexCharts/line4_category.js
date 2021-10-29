var options = {
  chart: {
    type: "line",
  },
  series: [
    {
      name:"Kategori ile",      
      data: [
        {
          x: "Apple",
          y: 54,
        },
        {
          x: "Orange",
          y: 66,
        },
      ],
    },
  ],
  xaxis: {
    type: "category",
  },
};

var chart = new ApexCharts(document.querySelector("#chart4"), options);
chart.render();
