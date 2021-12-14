
const service = require('../services/position-stack.service')

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
    }
}

module.exports = controller
