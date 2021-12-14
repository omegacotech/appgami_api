
const service = require('../services/position-stack.service')

const controller = {
    oneCall: async (req, res) => {
        const { query } = req.body
        try {
            const response = await service.oneCall(query)
            let data = {
                item: response.data
            }
            return res.status(200).json({ data })
        } catch (error) {
            console.log(error)
            return res.status(500).json({ error })
        }
    }
}

module.exports = controller
