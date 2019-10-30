// Function that loops through tableData to build a table from all data
function buildTable(ufoData) {
    ufoData.forEach(sightings => {
        var row = tbody.append('tr');
        Object.values(sightings).forEach(value => {
            var cell = row.append('td');
            cell.text(value);
        });
    });
}