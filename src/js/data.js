const date = document.getElementById("date");
const weatherIcon = document.getElementById("weatherIcon");
const weatherDetails = document.getElementById('details');
const dayOfWeekArr = ["日", "月", "火", "水", "木", "金", "土"];
const weatherIconPathArr = ["cloudy", "rainy", "sunny"];


const getDateInterval = setInterval(getDate, 1000);

const openWeatherApiKey = '143550e77f87a0f3521e074ffd8bae90';
const openWeatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&appid=' + openWeatherApiKey;

function getDate() {
    const nowDate = new Date();
    console.log(nowDate.getFullYear(), nowDate.getMonth()+1, nowDate.getDate());
    date.innerHTML = `${nowDate.getFullYear()}/${nowDate.getMonth()+1}/${nowDate.getDate()}（${dayOfWeekArr[nowDate.getDay()]}）`;
}