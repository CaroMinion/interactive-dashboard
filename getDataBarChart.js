function getDataBarChart(data) {
    const countries = [
        "China",
        "United States",
        "Japan",
        "Germany",
        "United Kingdom",
        "India",
    ];
    const datasetsCountries = [];
    const countriesObj = [];

    for (i = 0; i < data.length; i++) {
        if (
            data[i].Country == "China" ||
            data[i].Country == "United States" ||
            data[i].Country == "Japan" ||
            data[i].Country == "Germany" ||
            data[i].Country == "United Kingdom" ||
            data[i].Country == "India"
        ) {
            if (data[i].Year == 2020) {
                datasetsCountries.push(data[i]);
            }
        }
    }
    console.log("Hi", datasetsCountries);
    // for (i = 0; i < datasetsCountries.length; i++) {
    //     delete datasetsCountries[i].Year;
    //     delete datasetsCountries[i].continent;
    //     delete datasetsCountries[i].family;
    //     delete datasetsCountries[i].health;
    //     delete datasetsCountries[i].freedom;
    //     delete datasetsCountries[i].generosity;
    // }

    for (i = 0; i < countries.length; i++) {
        countriesObj.push({country: countries[i], info: []});
    }

    for (i = 0; i < datasetsCountries.length; i++) {
        for (j = 0; j < countriesObj.length; j++) {
            if (datasetsCountries[i].Country == countriesObj[j].country) {
                countriesObj[j].info.push(datasetsCountries[i].happiness_score);
                countriesObj[j].info.push(datasetsCountries[i].gdp_per_capita);
                countriesObj[j].info.push(
                    datasetsCountries[i].government_trust
                );
                countriesObj[j].info.push(datasetsCountries[i].cpi_score / 10);
            }
        }
    }
    return countriesObj;
}
