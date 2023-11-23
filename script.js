const temperature = document.querySelector(".temp")
const humidity = document.querySelector(".humidity")
const input = document.querySelector(".city-searcher")
const city = document.querySelector(".city")

const getWeatherData = async () => {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Belo Horizonte&units=metric&appid=cf2c14152cb744c04d4e07d07693f525"
  )
  const data = await response.json()
  temperature.innerHTML = parseInt(data.main.temp) + "ºC"
  humidity.innerHTML = data.main.humidity
}

getWeatherData()

const handleChangeCity = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=cf2c14152cb744c04d4e07d07693f525`
  )
  const data = await response.json()
  temperature.innerHTML = parseInt(data.main.temp) + "ºC"
  humidity.innerHTML = data.main.humidity
  city.innerHTML = input.value
}
