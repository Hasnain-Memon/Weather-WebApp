const searchBtn = document.getElementById('searchBtn');
const sign = ['%', '°C'];

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
    
            const windSpeed = document.getElementById('wind');
            windSpeed.innerText = data.wind.speed + sign[0];
    
            const humidity = document.getElementById('humi');
            humidity.innerText = data.main.humidity + sign[0];
    
        } catch (error){
            console.error('there was a problem with the fetch operation');
        }
    }

    getResponse();
});