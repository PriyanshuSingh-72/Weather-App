let input = document.querySelector(".input");
let i = document.querySelector("i");
let temp = document.querySelector(".temp")
let city = document.querySelector(".cityname");
let humidity = document.querySelector(".humperc");
let wind = document.querySelector(".windspeed");
 



i.addEventListener("click",()=>{
     const inputval = input.value;
    let apikey = "9cb01cad1d8281336bab64999e7eadf4";
let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apikey}&units=metric`
async function weather(){
    const response =  await fetch(url);
    const data =  await response.json();
    console.log(data);
    city.innerText = data.name;
    wind.innerText = parseInt(data.wind.speed)+" km/hr";
    temp.innerText = parseInt(data.main.temp)+"°"+"C";
    humidity.innerText = data.main.humidity + "%";
}
weather();
})

