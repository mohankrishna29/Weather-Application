const apiKey = "&appid=9a5aac4af051b1fc307811a2c2a381c3"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

let wIcon = document.querySelector('.cond') 

let searchCity = document.querySelector('.search-box')
console.log(searchCity)
let button = document.querySelector('.search-button')
let det1 = document.querySelector('.details')
let det2 = document.querySelector('.col')
let eMsg = document.querySelector('.error')

async function checkWeather(city='kakinada'){
    const response = fetch(apiUrl + city + apiKey)
    let data = await (await response).json()
    console.log(data)
    if (data['message'] == "city not found"){
        eMsg.style.display = 'block';
        det1.style.display = 'none' 
        det2.style.display = 'none'
    }
    
    document.querySelector('.city').innerHTML = data['name']
    document.querySelector('.temp').innerHTML = Math.round(data['main']['temp']) + '°c'
    document.querySelector('.val1').innerHTML = data['main']['humidity'] + ' %'
    document.querySelector('.val2').innerHTML = data['wind']['speed'] + ' km/h'

    if (data['weather'][0]['main'] == 'Clear'){
        wIcon.src = "images/clear.png"
    }
    else if (data['weather'][0]['main'] == 'Mist' || 'Haze'){
        wIcon.src = "images/mist.png"
    }
    else if (data['weather'][0]['main'] == 'Snow'){
        wIcon.src = "images/snow.png"
    }
    else if (data['weather'][0]['main'] == 'Rain'){
        wIcon.src = "images/rain.png"
    }
    else if (data['weather'][0]['main'] == 'Clouds'){
        wIcon.src = "images/clouds.png"
    }
    else if (data['weather'][0]['main'] == 'Drizzle'){
        wIcon.src = "images/drizzle.png"
    }

    eMsg.style.display = 'none';
    det1.style.display = 'flex' 
    det2.style.display = 'flex' 


}

button.addEventListener('click',funSearch)
function funSearch(){
    return checkWeather(searchCity.value)
}