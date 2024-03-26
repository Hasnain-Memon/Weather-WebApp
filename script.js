const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', async (e)=>{
    e.preventDefault();
    const search = document.getElementById('searchInput');
    const location = search.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid={API KEY}&units=metric`
    
    async function getResponse() {
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error('network respone was not ok');
            }
            const data = await response.json();
            console.log(data);
    
            const temperature = document.getElementById('temp');
            temperature.innerText = data.main.temp;
    
            const windSpeed = document.getElementById('wind');
            windSpeed.innerText = data.wind.speed;
    
            const humidity = document.getElementById('humi');
            humidity.innerText = data.main.humidity;
    
        } catch (error){
            console.error('there was a problem with the fetch operation');
        }
    }

    getResponse();
});
