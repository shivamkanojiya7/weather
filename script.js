 const apikey="0a41dde6c3d08d966df788a9f3801a48";
    const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox=document.querySelector(".search input");
    const searchBtn=document.querySelector(".search button");
    const weatherIcon=document.querySelector(".weather-icon");


    async function checkWeather(city) {
        const response=await fetch(apiUrl + city + `&appid=${apikey}`);
        var data =await response.json();

        
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
         document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
          document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";

          if (data.weather[0].main == "Clouds") {
    weatherIcon.innerHTML = `<i class="fas fa-cloud fa-4x"></i>`;
} else if (data.weather[0].main == "Clear") {
    weatherIcon.innerHTML = `<i class="fas fa-sun fa-4x"></i>`;
} else if (data.weather[0].main == "Rain") {
    weatherIcon.innerHTML = `<i class="fas fa-cloud-showers-heavy fa-4x"></i>`;
} else if (data.weather[0].main == "Drizzle") {
    weatherIcon.innerHTML = `<i class="fas fa-cloud-rain fa-4x"></i>`;
} else if (data.weather[0].main == "Thunderstorm") {
    weatherIcon.innerHTML = `<i class="fas fa-bolt fa-4x"></i>`;
} else if (data.weather[0].main == "Snow") {
    weatherIcon.innerHTML = `<i class="fas fa-snowflake fa-4x"></i>`;
} else {
    weatherIcon.innerHTML = `<i class="fas fa-smog fa-4x"></i>`; 
}

  document.querySelector(".weather").style.display="block";

    }
    searchBtn.addEventListener("click",()=>{
      checkWeather(searchBox.value); 
    });