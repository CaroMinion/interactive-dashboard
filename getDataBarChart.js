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

  const colors = [
    "rgba(31, 119, 180,1)",
    "rgba(255, 127, 14, 1)",
    "rgba(44, 160, 44, 1)",
    "rgba(214, 39, 40, 1)",
    "rgba(148, 103, 189, 1)",
    "rgba(140, 86, 75, 1)",
  ];

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

  for (i = 0; i < countries.length; i++) {
    countriesObj.push({ country: countries[i], info: [], color: [] });
  }

  for (i = 0; i < datasetsCountries.length; i++) {
    for (j = 0; j < countriesObj.length; j++) {
      if (datasetsCountries[i].Country == countriesObj[j].country) {
        countriesObj[j].info.push(datasetsCountries[i].happiness_score);
        countriesObj[j].info.push(datasetsCountries[i].gdp_per_capita);
        countriesObj[j].info.push(datasetsCountries[i].government_trust);
        countriesObj[j].info.push(datasetsCountries[i].cpi_score / 10);
      }
    }
  }

  for (i = 0; i < countriesObj.length; i++) {
    countriesObj[i].color.push(colors[i]);
  }

  return countriesObj;
}
