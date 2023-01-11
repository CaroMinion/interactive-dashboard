function createNewBarChart(canvas, data) {
    data = getDataBarChart(data);

    console.log(data);

    const datasets = [];

    data.forEach((d) => {
        datasets.push({
            label: d.country,
            data: d.info,
        });
    });

    const chart = new Chart(canvas, {
        type: "bar",
        data: {
            labels: [
                // "happiness score",
                "gdp per capita",
                "health",
                "freedom",
                "generosity",
                "government_trust",
                "social support",
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
                    text: "Relevance of Factors Contributing to the Happiness Score in 2020",
                },
            },
            drawActiveElementsOnTop: true,
        },
        plugins: [
            {
                id: "myEventCatcher",
                beforeEvent(chart, args, pluginOptions) {
                    const event = args.event;
                    //console.log(event.type);
                },
            },
        ],
    });

    return chart;
}
