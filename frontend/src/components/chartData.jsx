


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




