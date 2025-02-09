require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/", (req, res) => {
  const location = req.body.CityName;
  const apikey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}&units=metric`;

  https
    .get(url, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        try {
          const weatherData = JSON.parse(data);
          if (weatherData.cod !== 200) throw new Error(weatherData.message);

          const weatherHTML = `
          <div class="weather-card">
            <h2>${location}</h2>
            <p>${weatherData.weather[0].description}</p>
            <h3>${weatherData.main.temp}°C</h3>
            <img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png">
          </div>
        `;

          res.send(weatherHTML);
        } catch (error) {
          const errorHTML = `<div class="error"> ${error.message}</div>`;
          res.send(errorHTML);
        }
      });
    })
    .on("error", (error) => {
      const errorHTML = `<div class="error"> Network Error: ${error.message}</div>`;
      res.send(errorHTML);
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the app`);
});
