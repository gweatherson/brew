// Pulling JSON content from https://www.openbrewerydb.org/#documentation
// @TODO: Clean this up, make it less inline and more functional.
var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

getJSON('https://api.openbrewerydb.org/breweries',
function(err, data) {
  if (err !== null) {
    console.log('Something went wrong: ' + err);
  } else {

    var arrayLength = data.length;
    for (var i = 0; i < arrayLength; i++) {
        let brewName = data[i]["name"];
        let brewSite = data[i]["website_url"];
        let brewCity = data[i]["city"];
        let brewState = data[i]["state"];
        document.body.innerHTML += '<h2>' + brewName + '</h2>' + brewCity + ', ' + brewState + '<br /><a href="' + brewSite + '">Visit Website</a>';

    }

  }
});