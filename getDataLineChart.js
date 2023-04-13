function getDataLineChart(data) {
  const datasetsEurope = [];
  const countries = [
    "China",
    "United States",
    "Japan",
    "Germany",
    "United Kingdom",
    "India",
  ];

  const colors = [
    "rgba(31, 119, 180,1)",
    "rgba(255, 127, 14, 1)",
    "rgba(44, 160, 44, 1)",
    "rgba(214, 39, 40, 1)",
    "rgba(148, 103, 189, 1)",
    "rgba(140, 86, 75, 1)",
  ];
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
      datasetsEurope.push(data[i]);
    }
  }

  for (i = 0; i < countries.length; i++) {
    countriesObj.push({
      country: countries[i],
      happiness: [],
      color: [],
    });
  }

  for (i = 0; i < datasetsEurope.length; i++) {
    for (j = 0; j < countriesObj.length; j++) {
      if (datasetsEurope[i].Country == countriesObj[j].country) {
        countriesObj[j].happiness.push(datasetsEurope[i].happiness_score);
      }
    }
  }

  for (i = 0; i < countriesObj.length; i++) {
    countriesObj[i].color.push(colors[i]);
  }

  return countriesObj;
}
