// Function that recieves data from the form on button click and filters out the data based on form criteria then builds the table.
function filterData() {
    var searchDate = d3.select("#datetime").property("value");
    var searchCity = d3.select("#city").property("value").toLowerCase();
    var searchState = d3.select("#state").property("value").toLowerCase();
    var searchCountry = d3.select("#country").property("value").toLowerCase();
    var searchShape = d3.select("#shape").property("value").toLowerCase();
    var searchFilters = data;

    if (searchDate) {
        searchFilters = searchFilters.filter(ufo => ufo.datetime === searchDate);
    }
    if (searchCity) {
        searchFilters = searchFilters.filter(ufo => ufo.city === searchCity);
        d3.select("#city").text('');
    }
    if (searchState) {
        searchFilters = searchFilters.filter(ufo => ufo.state === searchState);
    }
    if (searchCountry) {
        searchFilters = searchFilters.filter(ufo => ufo.country === searchCountry);
    }
    if (searchShape) {
        searchFilters = searchFilters.filter(ufo => ufo.shape === searchShape);
    }
    tbody.html('');
    buildTable(searchFilters);
};