// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// ny times api key
var authKey = "989a9ab61bbf4006a7725dd8ba3eafbe";

// where do these come from?
/*
var searchTerm = 
var startYear = 
var endYear = 
*/

// Helper functions for making API Calls
var helper = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(location) {

    console.log(location);

    // create queryURL
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key="+authKey+"&q="+searchTerm+"&begin_date="+startYear+"0101&end_date="+endYear+"1231"
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response.data.results[0]) {
        //return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getHistory: function() {
    //return axios.get("/api");
  },

  // This function posts new searches to our database.
  postHistory: function(location) {
    //return axios.post("/api", { location: location });
  }
};

// We export the API helper
module.exports = helper;
