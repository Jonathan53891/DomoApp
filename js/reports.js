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
      rows: [
        ['Alabama', 1],
        ['Arizona', 8],
        ['Arkansas', 5],
        ['California', 47],
        ['Colorado', 9],
        ['Connecticut', 16],
        ['Delaware', 1],
        ['District of Columbia', 3],
        ['Florida', 21],
        ['Georgia', 20],
        ['Idaho', 3],
        ['Illinois', 34],
        ['Indiana', 8],
        ['Iowa', 2],
        ['Kansas', 1],
        ['Kentucky', 2],
        ['Louisiana', 2],
        ['Maryland', 3],
        ['Massachusetts', 16],
        ['Michigan', 19],
        ['Minnesota', 16],
        ['Missouri', 8],
        ['Nebraska', 4],
        ['Nevada', 2],
        ['New Jersey', 17],
        ['New York', 49],
        ['North Carolina', 13],
        ['Ohio', 25],
        ['Oklahoma', 3],
        ['Oregon', 2],
        ['Pennsylvania', 24],
        ['Rhode Island', 6],
        ['Tennessee', 10],
        ['Texas', 54],
        ['Virginia', 23],
        ['Washington', 10],
        ['Wisconsin', 7]
    ],
      // You provide the names, types, and mappings of your ordered columns
      columns: [
        {
          type: DomoPhoenix.DATA_TYPE.STRING,
          name: 'State',
          mapping: DomoPhoenix.MAPPING.ITEM
        },
        {
          type: DomoPhoenix.DATA_TYPE.DOUBLE,
          name: 'Fortune 500 Companies',
          mapping: DomoPhoenix.MAPPING.VALUE,
          format: '###,###'
        }
      ]
      //columns: columns,
      //rows: resultSet.map((row) => [row.US_State, row.Company_Name]),
    };

    const customColors = [
        '#002159',
        '#03449E',
        '#0967D2',
        '#47A3F3',
        '#BAE3FF'
    ];
  
    const options = {
      width: 893.75,
      height: 550,
    };
  
    const chart = new DomoPhoenix.Chart(
      DomoPhoenix.CHART_TYPE.MAP_UNITED_STATES,
      data,
      options
    );
  
    document.getElementById("map").appendChild(chart.canvas);
  
    chart.render();
  });
  