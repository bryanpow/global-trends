import pandas as pd
import numpy as np



pd.set_option('display.float_format', '{:.2f}'.format)
all_data = pd.read_csv('/Users/bryan/Projects/finance-app/global-trends/backend/src/data/22291f87-6287-4213-a167-2a19414ef55a_Data.csv')


del all_data['Series Code']
del all_data['Country Code']

all_data.drop([32,33,34,35,36], inplace=True)
all_data.drop(17, inplace=True)

all_data.replace('..', np.nan, inplace=True)

for col in all_data.columns:
    if col not in ['Country Name', 'Series Name']:
        all_data[col] = pd.to_numeric(all_data[col], errors='coerce')


numeric_cols = all_data.drop(['Country Name', 'Series Name'], axis=1)
numeric_cols.interpolate(method='linear', axis=1, inplace=True, limit_direction='forward')
numeric_cols.bfill(axis=1, inplace=True)
mask = all_data.isna()
all_data[mask] = numeric_cols[mask]

replacements = {
    'GNI per capita, Atlas method (current US$)': 'GNI',
    'GDP (current US$)': 'GDP',
    'Unemployment, total (% of total labor force) (national estimate)': 'Unemployment',
    'Inflation, consumer prices (annual %)': 'Inflation'
}

yearReplacements = {
    '2003 [YR2003]': 2003,
    '2004 [YR2004]': 2004,
    '2005 [YR2005]': 2005,
    '2006 [YR2006]': 2006,
    '2007 [YR2007]': 2007,
    '2008 [YR2008]': 2008,
    '2009 [YR2009]': 2009,
    '2010 [YR2010]': 2010,
    '2011 [YR2011]': 2011,
    '2012 [YR2012]': 2012,
       '2013 [YR2013]': 2013,
    '2014 [YR2014]': 2014,
    '2015 [YR2015]': 2015,
    '2016 [YR2016]': 2016,
    '2017 [YR2017]': 2017,
    '2018 [YR2018]': 2018,
    '2019 [YR2019]': 2019,
    '2020 [YR2020]': 2020,
    '2021 [YR2021]': 2021,
    '2022 [YR2022]': 2022,
}

all_data['Series Name'] = all_data['Series Name'].replace(replacements)
all_data.rename(columns=yearReplacements, inplace=True)

eap = all_data[all_data['Country Name'] == 'East Asia & Pacific']
del eap['Country Name']

eca = all_data[all_data['Country Name'] == 'Europe & Central Asia']
del eca['Country Name']

lac = all_data[all_data['Country Name'] == 'Latin America & Caribbean']
del lac['Country Name']

mena  = all_data[all_data['Country Name'] == 'Middle East & North Africa']
del mena['Country Name']

ssa = all_data[all_data['Country Name'] == 'Sub-Saharan Africa']
del ssa['Country Name']

world = all_data[all_data['Country Name'] == 'World']
del world['Country Name']

na = all_data[all_data['Country Name'] == 'North America']
del na['Country Name']

sa = all_data[all_data['Country Name'] == 'South Asia']
del sa['Country Name']

dataDict = {
    'World': world,
    'North America': na,
    'Europe & Central Asia': eca,
    'Latin America & Caribbean': lac,
    'Sub-Saharan Africa': ssa,
    'South Asia': sa,
    'East Asia & Pacific': eap,
    'Middle East & North Africa': mena
}
# inflation_average = all_data.iloc[[3,7,11,15,18,22,26,30]].reset_index()
# inflation_total= inflation_average.sum()
json_data = {}
for key,value in dataDict.items():
     json_data[key] = [dict(row, region=key) for row in value.to_dict(orient='records')]
