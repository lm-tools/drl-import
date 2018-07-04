/** csv file
 a,b,c
 1,2,3
 4,5,6
 */
const csvFilePath = 'DRLContentSheetCSV.csv';
const csv = require('csvtojson');
const results = [];
csv()
  .fromFile(csvFilePath)
  .on('json', (jsonObj) => {
    const result = Object.assign({}, jsonObj);
    result.category = jsonObj.category.split('\n');
    result.groups = jsonObj.groups.split('\n');
    const sector = {};
    if (jsonObj.sectorID) {
      sector[jsonObj.sectorID] = jsonObj.sectorDescription;
    }
    result.sector = sector;
    delete result.sectorID;
    delete result.sectorDescription;
    // combine csv header row and csv line to a json object
    // jsonObj.a ==> 1 or 4
    results.push(result);
  })
  .on('done', () => {
    console.log(results);
  });
