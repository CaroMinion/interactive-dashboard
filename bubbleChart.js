function createNewBubbleChart(canvas, data) {
    data = getDataBubbleChart(data);
    const datasets = [];

    console.log(data[0].countries.length);

    // for (i = 0; i < data.length; i++) {
    //     for (j = 0; j < data[i].countries.length; j++)
    //         datasets.push({
    //             label: data[i].continent,
    //             data: data[i].countries[j].info,
    //         });
    // }

    data.forEach((d) => {
        datasets.push({
            label: d.continent,
            data: Utils.bubbles(d.countries),
        });
    });

    console.log(datasets);

    const chart = new Chart(canvas, {
        type: "bubble",
        data: {
            labels: ["Europe", "Africa", "d", "h", "j", "a"],
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
                    text: "Government Corruption around the world in 2020",
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
