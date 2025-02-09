function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const cityName = form.CityName.value;

  fetch("/", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `CityName=${encodeURIComponent(cityName)}`,
  })
    .then((response) => response.text())
    .then((html) => {
      document.getElementById("weather-output").innerHTML = html;
    })
    .catch((error) => {
      document.getElementById(
        "weather-output"
      ).innerHTML = `<div class="error">Error: ${error.message}</div>`;
    });
}
