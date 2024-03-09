var apiKey = "cd2c129ef83515c4f01eade0eeeb9385";
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
var city = [];
var locationInput = $("#location");
var searchBtn = $("#search");

searchBtn.on("click", function() {
    var location = locationInput.val();
    getApi(location);
});

function getApi(location) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;
    
    fetch(requestUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
        });
}
