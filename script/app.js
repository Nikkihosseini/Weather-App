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
        searchValueInput.value = '';
      })
}


