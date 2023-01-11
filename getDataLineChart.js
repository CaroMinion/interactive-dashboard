function getDataLineChart(data) {
    const datasetsEurope = [];
    const countries = [
        "Germany",
        "Austria",
        "Switzerland",
        "Netherlands",
        "France",
        "United Kingdom",
        "Spain",
    ];
    const countriesObj = [];

    for (i = 0; i < data.length; i++) {
        if (data[i].continent == "Europe") {
            datasetsEurope.push(data[i]);
        }
    }

    // for (i = 0; i < datasetsEurope.length; i++) {
    //     if (!countries.includes(datasetsEurope[i].Country)) {
    //         countries.push(datasetsEurope[i].Country);
    //     }
    // }
    // countries.splice(countries.indexOf("Bosnia and Herzegovina"), 1);

    console.log(countries);

    for (i = 0; i < countries.length; i++) {
        countriesObj.push({country: countries[i], happiness: []});
    }

    for (i = 0; i < datasetsEurope.length; i++) {
        for (j = 0; j < countriesObj.length; j++) {
            if (datasetsEurope[i].Country == countriesObj[j].country) {
                countriesObj[j].happiness.push(
                    datasetsEurope[i].happiness_score
                );
            }
        }
    }

    return countriesObj;
}
