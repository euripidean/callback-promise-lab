const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function onsuccess(pos) {
  const { latitude, longitude, accuracy } = pos.coords;
  console.log("Your current position is:");
  console.log(`Latitude : ${latitude}`);
  console.log(`Longitude: ${longitude}`);
  console.log(`More or less ${accuracy} meters.`);
  showPosition(latitude, longitude, accuracy);
}

function onerror(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function showPosition(latitude, longitude, accuracy) {
  document.getElementById("latitude").textContent = latitude;
  document.getElementById("longitude").textContent = longitude;
  document.getElementById("accuracy").textContent = accuracy;
}

navigator.geolocation.getCurrentPosition(onsuccess, onerror, options);
// navigator.geolocation( successCallback, errorCallback, options )

// navigator.geolocation((pos) => {
//   //
// }, (err) => {
//   //
// }, {})

// Challenge: Make this work:

function getGeolocation(options) {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

// Like this:

getGeolocation(options)
  .then((pos) => {
    onsuccess(pos);
  })
  .catch((err) => {
    onerror(err);
  });
