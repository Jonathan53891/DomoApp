// Some DataSets are massive and will bring any web browser to its knees if you
// try to load the entire thing. To keep your app performing optimally, take
// advantage of filtering, aggregations, and group by's to bring down just the
// data your app needs. Do not include all columns in your data mapping file,
// just the ones you need.
//
// For additional documentation on how you can query your data, please refer to
// https://developer.domo.com/docs/dev-studio/dev-studio-data
domo.get('/data/v2/economicstrength?fields=Company_Name,Address_Line,City,US_State,US_ZIP,US_Region,Metropolitan_Area,Median_Home_Prices,Metro_Area_GDP&limit=501')
.then(data => {
    // Filter out rows with null Metro_Area_GDP
    const filteredData = data.filter(row => row.Metro_Area_GDP !== null);

    // Sort the filtered data by Company_Name in alphabetical order
    filteredData.sort((a, b) => {
        const companyA = a.Company_Name.toUpperCase();
        const companyB = b.Company_Name.toUpperCase();
        if (companyA < companyB) {
            return -1;
        }
        if (companyA > companyB) {
            return 1;
        }
        return 0;
    });

    // Round the Median_Home_Prices to two decimal places
    filteredData.forEach(row => {
        if (typeof row.Median_Home_Prices === 'number') {
            row.Median_Home_Prices = row.Median_Home_Prices.toFixed(2);
        }
    });

    // Call a function to draw the sorted table
    drawTable(filteredData, 'leads-table');
});
