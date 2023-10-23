const apiKey = 'd13ca374f2f79abbac373e89e9c0210e';
const cities = ['London', 'Taipei', 'Dubai', 'New York', 'Madrid'];

async function fetchCurrentWeather(city) {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error('Network response was not ok');
    return await response.json();
  } catch (error) {
    console.error(`Error fetching current weather for ${city}:`, error.message);
    return null;  
  }
}

async function fetchThreeDayForecast(city) {
  const endpoint = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric&cnt=24`;
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error('Network response was not ok');
    const data = await response.json();
    return data.list.filter((forecast, index) => index % 8 === 0); 
  } catch (error) {
    console.error(`Error fetching forecast for ${city}:`, error.message);
    return null;
  }
}

async function displayCityWeather(city) {
  const currentData = await fetchCurrentWeather(city);
  const forecastData = await fetchThreeDayForecast(city);

  const weatherBox = [...document.querySelectorAll('.weather-box')].find(
    box => box.querySelector('.city-name').textContent.trim() === city
  );

  const icon = weatherBox.querySelector('.weather-icon');
  if (currentData && currentData.weather && currentData.weather[0]) {
      icon.src = `https://openweathermap.org/img/w/${currentData.weather[0].icon}.png`;
      icon.alt = currentData.weather[0].description;
      icon.classList.remove('default-icon');
  } else {
      icon.classList.add('default-icon');  
  }

  if (currentData) {
      const currentDate = new Date(currentData.dt * 1000);
      const formattedDate = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
      const temp = weatherBox.querySelector('.temp');
      temp.innerHTML = `${formattedDate}<br>${currentData.main.temp}°C`;

      const descSpan = weatherBox.querySelector('.desc');
      descSpan.innerHTML = `${currentData.weather[0].description}<br>`;
  }

  if (forecastData) {
      for (let i = 1; i < 3; i++) {
          const forecast = forecastData[i];
          if (forecast) {
              const forecastDate = new Date(forecast.dt * 1000);
              const formattedForecastDate = `${forecastDate.getDate()}-${forecastDate.getMonth() + 1}-${forecastDate.getFullYear()}`;
              const forecastTemp = document.createElement('p');
              forecastTemp.innerHTML = `${formattedForecastDate}<br>${forecast.main.temp}°C`;
              weatherBox.appendChild(forecastTemp);
          }
      }
  }
}

async function initWeather() {
  for (const city of cities) {
    await displayCityWeather(city);  
  }
}

initWeather();