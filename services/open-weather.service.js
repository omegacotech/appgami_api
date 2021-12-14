require('dotenv-safe').config()

const axios = require('axios').default
const api = require('./axios-openweather')

const service = {
    oneCall: async (lat, long) => {
        try {
            const response = await api.get(`/onecall?lat=${lat}&lon=${long}&exclude=minutely&lang=pt_br&appid=${process.env.OPENWEATHER_APIKEY}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    },
    weather: async (query) => {
        try {
            const response = await api.get(`/weather?q=${query}&cnt=4&lang=pt_br&appid=${process.env.OPENWEATHER_APIKEY}`)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = service
