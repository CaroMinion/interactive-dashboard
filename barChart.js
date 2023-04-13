function createNewBarChart(canvas, data) {
  data = getDataBarChart(data);

  console.log(data);

  const datasets = [];

  data.forEach((d) => {
    datasets.push({
      label: d.country,
      data: d.info,
      backgroundColor: d.color,
    });
  });

  const chart = new Chart(canvas, {
    type: "bar",
    data: {
      labels: [
        "Happiness Score",
        "GDP",
        "Government Trust",
        "CPI Score Scaled*",
      ],
      datasets: datasets,
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
        },
      },
      plugins: {
        title: {
          display: true,
          position: "top",
          align: "center",
          color: "rgb(0, 0, 0)",
          text: "Comparision of Happiness Score, GDP, Government Trust and CPI Score in 2020 ",
          font: { size: 16 },
        },
      },
      drawActiveElementsOnTop: true,
    },
    plugins: [
      {
        id: "myEventCatcher",
        beforeEvent(chart, args, pluginOptions) {
          const event = args.event;
        },
      },
    ],
  });

  return chart;
}
