function getDataBubbleChart(data) {
    const continents = [
        "Europe",
        "Asia",
        "Africa",
        "South America",
        "North America",
        "Australia",
    ];
    const continentObj = [];

    for (i = 0; i < continents.length; i++) {
        continentObj.push({
            continent: continents[i],
            countries: [
                // {country: [], info: []}
            ],
        });
    }

    for (i = 0; i < data.length; i++) {
        for (j = 0; j < continentObj.length; j++) {
            if (data[i].continent == continentObj[j].continent) {
                if (data[i].Year == 2020) {
                    continentObj[j].countries.push({
                        country: data[i].Country,
                        info: [
                            data[i].government_trust,
                            data[i].cpi_score,
                            data[i].happiness_score,
                        ],
                    });
                }
            }
        }
    }

    console.log(continentObj);
    return continentObj;

    // const countries = ["Germany", "Austria", "Switzerland", "France", "Spain"];
    // const datasetsCountries = [];
    // const countriesObj = [];

    // for (i = 0; i < data.length; i++) {
    //     if (
    //         data[i].Country == "Germany" ||
    //         data[i].Country == "Austria" ||
    //         data[i].Country == "Switzerland" ||
    //         data[i].Country == "France" ||
    //         data[i].Country == "Spain"
    //     ) {
    //         if (data[i].Year == 2020) {
    //             datasetsCountries.push(data[i]);
    //         }
    //     }
    // }
    // for (i = 0; i < datasetsCountries.length; i++) {
    //     delete datasetsCountries[i].Year;
    //     delete datasetsCountries[i].continent;
    //     delete datasetsCountries[i].family;
    // }

    // for (i = 0; i < countries.length; i++) {
    //     countriesObj.push({country: countries[i], info: []});
    // }

    // for (i = 0; i < datasetsCountries.length; i++) {
    //     for (j = 0; j < countriesObj.length; j++) {
    //         if (datasetsCountries[i].Country == countriesObj[j].country) {
    //             // countriesObj[j].info.push(datasetsCountries[i].happiness_score);
    //             countriesObj[j].info.push(datasetsCountries[i].gdp_per_capita);
    //             countriesObj[j].info.push(datasetsCountries[i].health);
    //             countriesObj[j].info.push(datasetsCountries[i].freedom);
    //             countriesObj[j].info.push(datasetsCountries[i].generosity);
    //             countriesObj[j].info.push(
    //                 datasetsCountries[i].government_trust
    //             );
    //             countriesObj[j].info.push(datasetsCountries[i].social_support);
    //         }
    //     }
    // }
    // return countriesObj;
}
