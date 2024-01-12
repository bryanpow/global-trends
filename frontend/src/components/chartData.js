

export const data =   JSON.parse(window.localStorage.getItem("dataSet"));

//Integers represent the index of series in each region's respective data array
export let gni = 0;
export let unemployment = 1;
export let gdp = 2;
export let inflation = 3;

export const formatDataForChart = (arr, data, series) => {
  const yearDataMap = {};
  
  for (const region in data) {
    const regionData = data[region][series];
    for (const year in regionData) {
      if (year !== "Series Name" && year !== "region") {
        if (!yearDataMap[year]) {
          yearDataMap[year] = { name: year };
        }
        yearDataMap[year][regionData["region"]] = regionData[year];
      }
    }
  }
  for (const year in yearDataMap) {
    arr.push(yearDataMap[year]);
  }
  return 'good'
};



export const inflationTotal = {
  "East Asia & Pacific": 62,
  "Europe & Central Asia": 61,
  "Latin America & Caribbean": 84,
  "Middle East & North Africa": 79,
  "Sub-Saharan Africa": 128,
  World: 95,
  "North America": 73,
  "South Asia": 156,
};
export const unemploymentTotal = {
  "East Asia & Pacific": 0.06,
  "Europe & Central Asia": 1.57,
  "Latin America & Caribbean": 2.44,
  "Middle East & North Africa": 2.17,
  "Sub-Saharan Africa": "NO DATA",
  'World': 0.22,
  "North America": 2.33,
  "South Asia": 3.26,
};

export const gniTotal = {
  "East Asia & Pacific": 230,
  "Europe & Central Asia": 109,
  "Latin America & Caribbean": 128,
  "Middle East & North Africa": 150,
  "Sub-Saharan Africa": 142,
  World: 120,
  "North America": 94,
  "South Asia": 340,
};

export const gdpTotal = {
  "East Asia & Pacific": 253,
  "Europe & Central Asia": 87,
  "Latin America & Caribbean": 226,
  "Middle East & North Africa": 282,
  "Sub-Saharan Africa": 269,
  World: 158,
  "North America": 123,
  "South Asia": 441,
};

export const gdpSplit = {
    "East Asia & Pacific": [
      { "name": "2003-2012", "value": 143.32 },
      { "name": "2012-2022", "value": 44.93 }
    ],
    "Europe & Central Asia": [
      { "name": "2003-2012", "value": 65.89 },
      { "name": "2012-2022", "value": 12.81 }
    ],
    "Latin America & Caribbean": [
      { "name": "2003-2012", "value": 196.80 },
      { "name": "2012-2022", "value": 9.84 }
    ],
    "Middle East & North Africa": [
      { "name": "2003-2012", "value": 214.32 },
      { "name": "2012-2022", "value": 21.54 }
    ],
    "Sub-Saharan Africa": [
      { "name": "2003-2012", "value": 207.71 },
      { "name": "2012-2022", "value": 19.98 }
    ],
    "World": [
      { "name": "2003-2012", "value": 92.79 },
      { "name": "2012-2022", "value": 34.01 }
    ],
    "North America": [
      { "name": "2003-2012", "value": 46.39 },
      { "name": "2012-2022", "value": 52.50 }
    ],
    "South Asia": [
      { "name": "2003-2012", "value": 186.81 },
      { "name": "2012-2022", "value": 88.60 }
    ]
  };

export const gniSplit = {
    "East Asia & Pacific": [
      { "name": "2003-2012", "value": 123.06 },
      { "name": "2012-2022", "value": 47.90 }
    ],
    "Europe & Central Asia": [
      { "name": "2003-2012", "value": 85.67 },
      { "name": "2012-2022", "value": 12.64 }
    ],
    "Latin America & Caribbean": [
      { "name": "2003-2012", "value": 156.72 },
      { "name": "2012-2022", "value": -11.30 }
    ],
    "Middle East & North Africa": [
      { "name": "2003-2012", "value": 147.53 },
      { "name": "2012-2022", "value": 0.98 }
    ],
    "Sub-Saharan Africa": [
      { "name": "2003-2012", "value": 152.62 },
      { "name": "2012-2022", "value": -4.40 }
    ],
    "World": [
      { "name": "2003-2012", "value": 79.24 },
      { "name": "2012-2022", "value": 22.85 }
    ],
    "North America": [
      { "name": "2003-2012", "value": 37.21 },
      { "name": "2012-2022", "value": 41.14 }
    ],
    "South Asia": [
      { "name": "2003-2012", "value": 166.33 },
      { "name": "2012-2022", "value": 65.05 }
    ]
  };

  export const unemploymentSplit = {
    "East Asia & Pacific": [
      { "name": "2003-2012", "value": 0.55 },
      { "name": "2012-2022", "value": 0.60 }
    ],
    "Europe & Central Asia": [
      { "name": "2003-2012", "value": 0.31 },
      { "name": "2012-2022", "value": 1.89 }
    ],
    "Latin America & Caribbean": [
      { "name": "2003-2012", "value": 2.99 },
      { "name": "2012-2022", "value": 0.55 }
    ],
    "Middle East & North Africa": [
      { "name": "2003-2012", "value": 0.40 },
      { "name": "2012-2022", "value": 1.77 }
    ],
    "World": [
      { "name": "2003-2012", "value": 1.00 },
      { "name": "2012-2022", "value": 0.79 }
    ],
    "North America": [
      { "name": "2003-2012", "value": 1.84 },
      { "name": "2012-2022", "value": 4.16 }
    ],
    "South Asia": [
      { "name": "2003-2012", "value": 4.82 },
      { "name": "2012-2022", "value": 1.56 }
    ],
    "Sub-Saharan Africa": [
        { "name": "2003-2012", "value": 'NA' },
        { "name": "2012-2022", "value": 'NA' }
      ],
  };

  export const inflationSplit = {
    "East Asia & Pacific": [
      { "name": "2003-2012", "value": 37.28 },
      { "name": "2012-2022", "value": 25.06 }
    ],
    "Europe & Central Asia": [
      { "name": "2003-2012", "value": 30.55 },
      { "name": "2012-2022", "value": 26.61 }
    ],
    "Latin America & Caribbean": [
      { "name": "2003-2012", "value": 44.24 },
      { "name": "2012-2022", "value": 32.56 }
    ],
    "Middle East & North Africa": [
      { "name": "2003-2012", "value": 42.06 },
      { "name": "2012-2022", "value": 25.41 }
    ],
    "Sub-Saharan Africa": [
      { "name": "2003-2012", "value": 60.93 },
      { "name": "2012-2022", "value": 54.50 }
    ],
    "World": [
      { "name": "2003-2012", "value": 43.41 },
      { "name": "2012-2022", "value": 32.06 }
    ],
    "North America": [
      { "name": "2003-2012", "value": 22.31 },
      { "name": "2012-2022", "value": 25.25 }
    ],
    "South Asia": [
      { "name": "2003-2012", "value": 72.08 },
      { "name": "2012-2022", "value": 62.61 }
    ]
};
export const formatForBar = (arr, series, region) => {
  for (const entry in series) {
    if (entry !== region) {
      arr.push({
        Comparison: series[entry],
        [region]: series[region],
        name: `${entry}: ${series[entry]} `,
      });
    }
  }
};

export const formatForSort = (series) => {
  let entries = Object.entries(series);
  entries = entries.filter((pair) => pair[0] !== "World");
  entries.sort((a, b) => b[1] - a[1]);
  const sorted = entries.slice(0, 3);
  return sorted;
};
