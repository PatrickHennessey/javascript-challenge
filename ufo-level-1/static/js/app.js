// import { select } from "d3";
// Var the data from data.js
var tableData = data;

// Grab the needed html elements
var tbody = d3.select('tbody');
var form = d3.select('form');
var filterButton = d3.select("#filter-btn");
var resetButton = d3.select('#reset-btn');

// Make sure the tbody html is clean
tbody.html("");

// Uses function to build starting table
buildTable(tableData);