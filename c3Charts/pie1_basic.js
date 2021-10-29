var chart = c3.generate({
  bindto: "#chart6",
  data: {
    // iris data from R
    columns: [
      ["data1", 30],
      ["data2", 120],
      ["data3", 10],
      ["data4", 180],
    ],
    type: "pie",
    onclick: (d, i) => {
      console.log("onclick", d, i);
    },
    onmouseover: (d, i) => {
      console.log("onmouseover", d, i);
    },
    onmouseout: (d, i) => {
      console.log("onmouseout", d, i);
    },
  },
});
