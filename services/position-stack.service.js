require('dotenv-safe').config()

const api = require('./axios-positionstack')

const service = {
    oneCall: async (query) => {
        const response = await api.get(`/forward?access_key=${process.env.POSITIONSTACK_APIKEY}&query=${query}&output=json&limit=1`)
        return response.data
    }
}

module.exports = service
