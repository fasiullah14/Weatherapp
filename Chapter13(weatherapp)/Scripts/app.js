const weatherForm=document.querySelector('form');
const details=document.querySelector('.details');
const card=document.querySelector('.card');
const time=document.querySelector('.time');
const Icon=document.querySelector('.icon img');
const forecast=new Forecast();
const UpdateUI=(data)=>{
    // const weather=data.weather;
    // const setCity=data.setCity;
    //destructure
    const {weather,setCity}=data;
    let icon=`img/icons/${weather.WeatherIcon}.svg`;
    Icon.setAttribute('src',icon);
    let img;
    if(weather.IsDayTime){
     img=`img/day.svg`;
    }
    else{
     img=`img/night.svg`;
    }

    time.setAttribute('src', img);
    details.innerHTML=`<h5 class="my-3">${setCity.EnglishName}</h5> 
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>
    </div>`;
    if(card.classList.contains('d-none'))
    {
        card.classList.remove('d-none');
    }
}

    weatherForm.addEventListener('submit',e=>{
    e.preventDefault();
    const city=weatherForm.city.value.trim();
    weatherForm.reset();
    
    forecast.getData(city).then(data=>{
        UpdateUI(data);
        console.log(data);
    }).catch(err=>console.log(err));
    localStorage.setItem('city',city);
})
if (localStorage.getItem('city')) {
    forecast.getData(localStorage.getItem('city')).then(data=>{ UpdateUI(data);
    }).catch(err=>console.log(err));
}