


export let data = JSON.parse(window.localStorage.getItem('dataSet'))

//Integers represent the index of series in each region's respective data array
export const gni = 0
export const unemployment = 1
export const gdp = 2
export const inflation = 3
 
export const formatDataForChart = (arr, data, series) => {
    const yearDataMap = {};

    for (const region in data) {
            const regionData = data[region][series];
            for (const year in regionData) {
                if (year !== 'Series Name' && year !== 'region') {
                    if (!yearDataMap[year]) {
                        yearDataMap[year] = { 'name': year };
                    }
                    yearDataMap[year][regionData['region']] = regionData[year];
                }
            }
    }
    for (const year in yearDataMap) {
        arr.push(yearDataMap[year]);
    }
};

export const formatDataForPieChart = (arr, data, series) => {
    const firstHalfData = {};
    const secondHalfData = {};
    const lastYearData = {};
    const yearIncrements = {};

    // First, collect all years to determine the midpoint
    for (const region in data) {
        for (const year in data[region][series]) {
            if (year !== 'Series Name' && year !== 'region') {
                yearIncrements[year] = 0;
            }
        }
    }

    // Get sorted years and find the midpoint, excluding the first year
    const years = Object.keys(yearIncrements).sort().slice(1);
    const midpoint = Math.floor(years.length / 2);

    for (const region in data) {
        const regionData = data[region][series];

        for (let i = 0; i < years.length; i++) {
            const year = years[i];
            const previousYear = years[i - 1];

            if (lastYearData[region] !== undefined) {
                const lastValue = lastYearData[region];
                const currentValue = regionData[year];
                const percentIncrease = lastValue !== 0 ? ((currentValue - lastValue) / lastValue) * 100 : 0;

                if (i < midpoint) {
                    firstHalfData[region] = (firstHalfData[region] || 0) + percentIncrease;
                } else {
                    secondHalfData[region] = (secondHalfData[region] || 0) + percentIncrease;
                }
            }

            lastYearData[region] = regionData[year];
        }

        // Average the increments
        if (midpoint > 0) {
            firstHalfData[region] = (firstHalfData[region] || 0) / midpoint;
        }
        if (years.length - midpoint > 0) {
            secondHalfData[region] = (secondHalfData[region] || 0) / (years.length - midpoint);
        }
    }

    // Push the average percent increase for the first and second halves
    arr.push({
        name: 'First Half',
        ...firstHalfData
    });
    arr.push({
        name: 'Second Half',
        ...secondHalfData
    });
};

export const inflationTotal = {
    'East Asia & Pacific': 62,
    'Europe & Central Asia': 61,
    'Latin America & Caribbean':84,
    'Middle East & North Africa': 79,
    'Sub-Saharan Africa': 128,
    'World': 95,
    'North America': 73,
    'South Asia': 156,
}
export const unemploymentTotal = {
    'East Asia & Pacific': '+0.06',
    'Europe & Central Asia': '-1.57',
    'Latin America & Caribbean': '-2.44%',
    'Middle East & North Africa': '-2.17%',
    'Sub-Saharan Africa': 1,
    'World': '-0.22%',
    'North America': '-2.33%',
    'South Asia': '-3.26%'
}

export const gniTotal= {
    "East Asia & Pacific": 230,
    "Europe & Central Asia": 109,
    "Latin America & Caribbean": 128,
    "Middle East & North Africa": 150,
    "Sub-Saharan Africa": 142,
    "World": 120,
    "North America": 94,
    "South Asia": 340
}

export const gdpTotal = {
    "East Asia & Pacific": 253,
    "Europe & Central Asia": 87,
    "Latin America & Caribbean": 226,
    "Middle East & North Africa": 282,
    "Sub-Saharan Africa": 269,
    "World": 158,
    "North America": 123,
    "South Asia": 441
}
export const pageTitle = 'North America'

export let data2 = []
export const formatForBar = (arr,series) => {
    for (const entry in series) {
        if (entry !== 'North America') {
            arr.push(
                {
                    'Comparison': series[entry],
                    'North America': series['North America'],
                    name: `${entry}: ${series[entry]} `,
                }
            )
        }
        
      }
  }

export const formatForSort = (series) => {
        let entries = Object.entries(series);
        entries = entries.filter(pair => pair[0] !== 'World')
        entries.sort((a,b) => b[1] - a[1]);
        const sorted = entries.slice(0,3);
        return sorted
}
