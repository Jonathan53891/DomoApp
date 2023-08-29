// Some DataSets are massive and will bring any web browser to its knees if you
// try to load the entire thing. To keep your app performing optimally, take
// advantage of filtering, aggregations, and group by's to bring down just the
// data your app needs. Do not include all columns in your data mapping file,
// just the ones you need.
//
// For additional documentation on how you can query your data, please refer to
// https://developer.domo.com/docs/dev-studio/dev-studio-data
domo.get('/data/v2/economicstrength?fields=Company_Name,Full_Address,US_Region,Address_Line,City,US_State,FIPS_STRING,US_County,US_ZIP,Metropolitan_Area,Median_Home_Prices,Metro_Area_GDP&limit=501')
.then(data => drawTable(data, 'leads-table'));
