const locationInput = document.querySelector('#location-input');
const searchBtn = document.querySelector('#search-btn');

const locationElement = document.querySelector('#location');
const tempElement = document.querySelector('#temperature');
const descElement = document.querySelector('#description');
const iconImg = document.querySelector('#iconImg');

const apiKey = '374ad7f13f5d47cb952160821241903';
let locationVal = ''
console.log('Script Connection')
searchBtn.addEventListener('click', function() {
    locationVal = locationInput.value.trim();
    console.log(locationVal);
    if(locationVal === null || locationVal== ''){
        alert('Location empty !')
    }
    else{
        fetchData()
    }
});

async function fetchData() {
    let apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${locationVal}`;
    console.log('IN async function');
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parse JSON data
        updateUI(data);
        console.log('URL Fetched');
        
    } catch (error) {
        alert(`${error} an error encountered`);
    }
}

function updateUI (data){
    console.log('Data Updating')
    locationElement.textContent = `${data.location.name}, ${data.location.country}`;
    tempElement.textContent = `Temperature: ${data.current.temp_c}°C`;
    descElement.textContent = `Weather: ${data.current.condition.text}`;
    iconImg.src = `https:${data.current.condition.icon}`;
}
