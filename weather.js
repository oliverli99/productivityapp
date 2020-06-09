// api key: 1a13247695e35ba6373838d8f1384ea5


// @ts-check
function getWeather(){ 

  var temperature = document.getElementById("temperature");  
  var location = document.getElementById("location"); 

  location.innerHTML = "Locating ... "; 

  var api = "https://api.openweathermap.org/data/2.5/weather"; 
  var apiKey ="1a13247695e35ba6373838d8f1384ea5";

  // returns lat and long coords 
  navigator.geolocation.getCurrentPosition(success, error); 

  function success(position) {
    var latitude = position["coords"]["latitude"]; 
    var longitude = position["coords"]["longitude"]; 
  
    let url = api + "?lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey + "&units=imperial";

    fetch(url)
    .then(response => response.json())
    .then(weatherdata => {
      console.log(weatherdata);
      let temp = weatherdata.main.temp;
      temperature.innerHTML = temp + "° F";
      location.innerHTML =
        weatherdata.name;
    });

  }
   
  function error() {
    location.innerHTML = "Unable to retrieve your location";
  }
  
} 





 // call get weather function
 getWeather(); 
 