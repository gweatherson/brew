fetch('https://api.openbrewerydb.org/breweries')
  .then(function(response) {
    return response.json();
  })
  .then(function(breweries) {
    let breweryContainer = document.getElementById("breweries");
    let brewLength = breweries.length;
    breweries.forEach(function (brewery, index) {
      let name    = "<h2>" + brewery['name'] + "</h2>";
      let website = "<a href=" + brewery['website_url'] + ">" + brewery['website_url'] + "</a>";
      let city    = brewery["city"];
      let state   = brewery["state"];
      let formattedBrewery = '<div>' + name + website + city + ', ' + state + '</div>';
      breweryContainer.innerHTML += formattedBrewery;

    });

  });