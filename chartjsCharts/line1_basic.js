const labels1 = ["January", "February", "March", "April", "May", "June"];
const data1 = {
  labels: labels1,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

const config1 = {
  type: "line",
  data: data1,
  options: {},
};

const chart1 = new Chart(document.getElementById("chart1"), config1);