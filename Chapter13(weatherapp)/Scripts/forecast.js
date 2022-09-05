class Forecast{
constructor(){
this.key='0GrVJo8AwpBCdCif9TkOiuOGChiYUQpC'
this.weatherURL='http://dataservice.accuweather.com/currentconditions/v1/';
this.cityURL='http://dataservice.accuweather.com/locations/v1/cities/search';
}
  async getData(city){
    const setCity=await this.getCity(city);
    const weather=await this.getWeather(setCity.Key);
    return {weather,
            setCity}
    }
 async getWeather(id){
    const query=`${id}?apikey=${this.key}`;
    const responce=await fetch(this.weatherURL+query);
    const data=await responce.json();
    return data[0];
}
 async getCity(city){
    const query=`?apikey=${this.key}&q=${city}`;
    const responce=await fetch(this.cityURL+query);
    const data=await responce.json();
    return data[0];
}
}


 

// getCity('manchester').then(data=>{
// return getWeather(data.Key);
// }).then(data=>{
// console.log(data)})
// .catch(err=> console.log(err));
//getCity('manchester').then(data=>console.log(data));
 //getWeather('329260').then(data=>console.log(data));