var chart = c3.generate({
  bindto: "#chart7",
  data: {
    columns: [
      ["data1", 30, 20, 50, 40, 60, 50],
      ["data2", 200, 130, 90, 240, 130, 220],
      ["data3", 300, 200, 160, 400, 250, 250],
    ],
    type: "bar",
    colors: {
      data1: "#ff0000",
      data2: "#00ff00",
      data3: "#0000ff",
    },
    labels: true,
  },
});
