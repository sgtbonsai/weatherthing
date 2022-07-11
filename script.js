//TEXAS
const weatherTX =  fetch('https://api.openweathermap.org/data/2.5/weather?id=4684888&appid= no &units=imperial')
  .then(function(resp) { return resp.json() }) 
  .then(function(data) {
    console.log(data);
    TXTEMP.innerHTML = Math.round(data.main.temp) + "˚F"
  })
    
  const TXTemp = document.getElementById("tempTX");

const TXweather =  fetch('https://api.openweathermap.org/data/2.5/weather?id=4684888&appid= no &units=imperial')
  .then(function(resp) { return resp.json() }) 
  .then(function(data) {
    console.log(data);
    TXFEELS.innerHTML = Math.round(data.main.feels_like) + "˚F" })
  const TXFeels = document.getElementById("feelsTX");


//WASHINGTON
 const weatherWA =  fetch('https://api.openweathermap.org/data/2.5/weather?id=5809844&appid=  no &units=imperial')
  .then(function(resp) { return resp.json() }) 
  .then(function(data) {
    console.log(data);
    WATEMP.innerHTML = Math.round(data.main.temp) + "˚F"
  })
const WATemp = document.getElementById("tempWA");

//NEW YORK
 const weatherNY =  fetch('https://api.openweathermap.org/data/2.5/weather?id=5128581&appid= no &units=imperial')
  .then(function(resp) { return resp.json() }) 
  .then(function(data) {
    console.log(data);
    NYTEMP.innerHTML = Math.round(data.main.temp) + "˚F"
  })

const NYTemp = document.getElementById("tempWA");

//FLORIDA
 const weatherFL =  fetch('https://api.openweathermap.org/data/2.5/weather?id=4164138&appid= no &units=imperial')
  .then(function(resp) { return resp.json() }) 
  .then(function(data) {
    console.log(data);
    FLTEMP.innerHTML = Math.round(data.main.temp) + "˚F"
  })

const FLTemp = document.getElementById("tempFL");

//CALIFORNIA
 const weatherCA =  fetch('https://api.openweathermap.org/data/2.5/weather?id=5368361&appid= no &units=imperial')
  .then(function(resp) { return resp.json() })
  .then(function(data) {
    console.log(data);
    CATEMP.innerHTML = Math.round(data.main.temp) + "˚F"
  })

const CATemp = document.getElementById("tempCA");

document.getElementById('icon').src = `http://openweathermap.org/img/w/${d.weather[0].icon}.png`;
 
