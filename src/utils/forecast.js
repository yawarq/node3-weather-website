const request = require('request')

const forecast = (latitude, longitude, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=d80ffa8a6898864f7f01ded6d7d93ba8&query='+ latitude +','+ longitude + '&units=f'
    
    request({url, json:true}, (error, {body})=> {
        if(error)
        {
            callback('Unable to connect', undefined)
        }else if(body.error){
            callback('unable to find location',undefined)
        }
		 else {
            callback(undefined,
        body.current.weather_descriptions[0] +'. It is currently '+body.current.temperature+' degrees out. '+ 'It feels like '+ body.current.feelslike +' degrees out. '+'The humidity is recorded to be '+ body.current.humidity + '%.'+ 'The wind speed is '+ body.current.wind_speed + 'm/s.')
            }
})

    }
module.exports = forecast
