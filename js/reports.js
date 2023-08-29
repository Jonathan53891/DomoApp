// For more on how to use Phoenix view the documentation at:
// https://domoapps.github.io/domo-phoenix/

domo.get('/data/v2/economicstrength').then((resultSet) => {
    const columns = [
      {
        type: DomoPhoenix.DATA_TYPE.STRING,
        name: "US_State",
        mapping: DomoPhoenix.MAPPING.ITEM,
      },
      {
        type: DomoPhoenix.DATA_TYPE.STRING,
        name: "Company_Name",
        mapping: DomoPhoenix.MAPPING.ITEM,
      },
    ];
  
    const data = {
      columns: columns,
      rows: resultSet.map((row) => [row.US_State, row.Company_Name]),
    };

    const customColors = [
        '#002159',
        '#03449E',
        '#0967D2',
        '#47A3F3',
        '#BAE3FF'
    ];
  
    const options = {
      width: 650,
      height: 400,
    };
  
    const chart = new DomoPhoenix.Chart(
      DomoPhoenix.CHART_TYPE.MAP_UNITED_STATES,
      data,
      options
    );
  
    document.getElementById("map").appendChild(chart.canvas);
  
    chart.render();
  });
  