const url = "https://api.openweathermap.org/data/2.5/weather?q=pakistan&appid=8ecfdb17a81d4fc60d5bb9ad93e48d53&units=metric";

async function getResponse() {
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('network respone was not ok');
        }
        const data = await response.json();
        console.log(data)
    } catch (error){
        console.error('there was a problem with the fetch operation');
    }
};

getResponse();