const CLEFAPI = "bcb0ed88746dcd2bad3f2c840ce3698b";

let resultatsAPI;

const temps = document.querySelector(".temps");
const temperature = document.querySelector(".temperature");
const localisation = document.querySelector(".temps");

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      //console.log(position);
      let long = position.coords.longitude;
      let lat = position.coords.latitude;
      AppelAPI(long, lat);
    },
    () => {
      alert("Veuillez activer votre géolocalisation");
    }
  );
}

function AppelAPI(long, lat) {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${CLEFAPI}`
  )
    .then((reponse) => {
      return reponse.json();
    })
    .then((data) => {
      resultatsAPI = data;

      temps.innerHTML = resultatsAPI.current.weather[0].description;
      temperature.innerHTML = `${Math.round(resultatsAPI.current.temp)}°`;
    });
}
