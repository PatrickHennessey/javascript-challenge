// Function that recieves data from the form on button click and filters out the data based on form criteria then builds the table.
function filterDataLvl1() {
    var searchDate = d3.select("#datetime").property("value");
    var searchFilters = data;
 
    searchFilters = searchFilters.filter(ufo => ufo.datetime === searchDate);

    tbody.html('');
    buildTable(searchFilters);
};