
const service = require('../services/open-weather.service')

const controller = {
    oneCall: async (req, res) => {
        const { lat, long } = req.body.data
        try {
            const response = await service.oneCall(lat, long)
            let data = {
                item: response
            }
            return res.status(200).json({ data })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error })
        }
    },
    weather: async (req, res) => {
        const { query } = req.params
        try {
            const response = await service.weather(query)
            let data = {
                item: response
            }
            return res.status(200).json({ data })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error })
        }
    },
}

module.exports = controller
