const $ = document
const main = $.querySelector('main')
const form = $.querySelector('form')
const searchValueInput = $.getElementById('weatherApp__search')
const cityName = $.querySelector('.weatherApp__location')
const flagCountry = $.querySelector('.weatherApp__flag')
const weatherAppImg = $.querySelector('.weatherApp__img')
const temperature = $.querySelector('.weatherApp__temperature')
const description = $.querySelector('.weatherApp__description')
const clouds = $.querySelector('.clouds')
const humidity = $.querySelector('.humidity')
const pressure = $.querySelector('.pressure')


form.addEventListener('submit', (event) => {
    event.preventDefault()
    if(searchValue.value !== ''){
        searchValue()
    }

})

let id = '5d441138695a6c17d11eac0509c4b6fd';
let url = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=' + id ;

function searchValue(){
      fetch(url + '&q=' + searchValueInput.value)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if(data.cod == 200){
            let cityName = $.querySelector('.weatherApp__location')
            cityName.innerHTML = data.name
        
            let flagCountry = $.querySelector('.weatherApp__flag')
            flagCountry.src = `https://flagsapi.com/${data.sys.country}/shiny/64.png`
        
            let weatherAppImg = $.querySelector('.weatherApp__img')
            weatherAppImg.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`
        
            let temperature = $.querySelector('.weatherApp__temperature')
            temperature.innerHTML = data.main.temp
        
            let description = $.querySelector('.weatherApp__description')
            description.innerHTML = data.weather[0].description
        
            let clouds = $.querySelector('.clouds')
            clouds.innerHTML = `${data.clouds.all}%`
        
            let humidity = $.querySelector('.humidity')
            humidity.innerHTML = `${data.main.humidity}%`
        
            let pressure = $.querySelector('.pressure')
            pressure.innerHTML = `${data.main.pressure}hPa`
        }else{
            main.classList.add('error')
            setTimeout(() => {
                main.classList.remove('error')
            }, 2000);
        }
        searchValueInput.value = '';
      })
}

function inItApp(){
    searchValueInput.value = 'New York'
    searchValue()
}
inItApp()

