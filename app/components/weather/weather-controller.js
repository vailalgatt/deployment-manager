function WeatherController(){
	var weatherService = new WeatherService();
	
	weatherService.getWeather(function(weather){
		console.log(weather);
		weatherService.weather = weather
		draw()
	})
	var fTemp = false
	function draw(){
		
		fTemp = !fTemp
		var template =``
		var elem = document.getElementById("weather");
		if (fTemp == true){
			template = `<p>The temperature in ${weatherService.weather.name} is <a href="#" id="toggle-temp">${(weatherService.weather.main.temp *(9/5) - 459.67).toFixed(1) + "°F"}</a></p>`
		}else{
			template = `<p>The temperature in ${weatherService.weather.name} is <a href="#" id="toggle-temp">${(weatherService.weather.main.temp - 273.15).toFixed(1) + "°C"}</a></p>`
		}
		
	elem.innerHTML = template
	var temp = document.getElementById("toggle-temp")
	temp.addEventListener("click", draw)
	}

	function failed(){
    var elem = document.getElementById("weather")

    elem.innerHTML = "request denied"
	}

}