require('dotenv-safe').config()

const api = require('./axios-openweather')

const service = {
    oneCall: async (lat, long) => {
        const response = await api.get(`/onecall?lat=${lat}&lon=${long}&appid=${process.env.API_KEY}`)
        return response.data
    }
}

module.exports = service
