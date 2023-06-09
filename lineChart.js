function createNewLineChart(canvas, data) {
  data = getDataLineChart(data);

  console.log(data);

  const datasets = [];

  data.forEach((d) => {
    datasets.push({
      label: d.country,
      data: d.happiness,
      backgroundColor: d.color,
      borderColor: d.color,
    });
  });

  const chart = new Chart(canvas, {
    type: "line",
    data: {
      labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
      datasets: datasets,
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            position: "top",
            align: "center",
            color: "rgb(0, 0, 0)",
            text: "Happiness Score",
          },
        },
      },
      plugins: {
        title: {
          display: true,
          position: "top",
          align: "center",
          color: "rgb(0, 0, 0)",
          text: "Happiness Score Development 2015 - 2020",
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
