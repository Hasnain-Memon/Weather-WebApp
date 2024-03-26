const searchBtn = document.getElementById('searchBtn');
const sign = ['%', '°C', 'km/h'];

searchBtn.addEventListener('click', async (e)=>{
    e.preventDefault();
    const search = document.getElementById('searchInput');
    const location = search.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=8ecfdb17a81d4fc60d5bb9ad93e48d53&units=metric`
    
    async function getResponse() {
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error('network respone was not ok');
            }
            const data = await response.json();
            console.log(data);
    
            const temperature = document.getElementById('temp');
            temperature.innerText = data.main.temp + sign[1];
            const tempMin = document.getElementById('tempMin');
            tempMin.innerText = data.main.temp_min + sign[1];
            const tempMax = document.getElementById('tempMax');
            tempMax.innerText = data.main.temp_max + sign[1];
            const feelsLike = document.getElementById('feelsLike');
            feelsLike.innerText = data.main.feels_like + sign[1]
    
            const windSpeed = document.getElementById('wind');
            windSpeed.innerText = data.wind.speed + sign[2];
            const grndLevel = document.getElementById('grnd_level');
            grndLevel.innerText = data.main.grnd_level;
    
            const humidity = document.getElementById('humi');
            humidity.innerText = data.main.humidity + sign[0];
            const pressure = document.getElementById('pressure');
            pressure.innerText = data.main.pressure;
    
        } catch (error){
            console.error('there was a problem with the fetch operation');
        }
    }

    getResponse();
});