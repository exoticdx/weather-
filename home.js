// let p = fetch("http://api.weatherapi.com/v1/current.json?key=c084a608b078485f9f3105635222912&q=delhi&aqi=no")

// let x = p.then((response)=>{
//     console.log(response.status)
//     console.log(response.ok)
//     return response.json()
// }).then((value)=>{
//     console.log(value)
let tempc = document.getElementById("temprature")
let cityname = document.getElementById("CityName")
let region = document.getElementById("Region")
let country = document.getElementById("Country")
let day = document.getElementById("Day");
let Wspeed = document.getElementById("WSpeed")
let Wdirection = document.getElementById("WDirection")
let Humidity = document.getElementById("Humidity")
let statusW =document.getElementById("Status")
let gifw = document.getElementById("GIFW")
let Time = document.getElementById("Time")

let city = prompt("enter city name ")
 let weather = async()=> {
    let data =0;
    let p = fetch("https://api.weatherapi.com/v1/current.json?key=&q="+city+"&aqi=no")
    let x = p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()
}).then((value)=>{
    console.log(value)
    // console.log(tempc.innerHTML)
    tempc.innerHTML = value.current.temp_c;
    cityname.innerHTML = value.location.name;
    region.innerHTML = value.location.region;
    statusW.innerHTML = value.current.condition.text
    country.innerHTML = value.location.country;
    if(value.current.is_day==0)
    {
        day.innerHTML = "Night"
        gifw.src = "https://giphy.com/embed/iXBJqdt7ibU2OE3MCB"
    }
    else
    {
        day.innerHTML= "Day"
        gifw.src = "https://giphy.com/embed/fwR54Wq7dYu9VXKiAF"
    }
    Wspeed.innerHTML = "Wind Speed : "+value.current.wind_kph+"  Kph"
    Wdirection.innerHTML = "Wind Direction : " + value.current.wind_dir
    Humidity.innerHTML = "Humidity : "+value.current.humidity
    Time.innerHTML = value.location.localtime
    
 })
// for night "https://giphy.com/embed/iXBJqdt7ibU2OE3MCB"
// for day "https://giphy.com/embed/fwR54Wq7dYu9VXKiAF"
}

weather()
