const axios = require('axios').default

const handleError = (error) => {
    return Promise.reject(error)
}

const instance = axios.create({
    baseURL:process.env.POSITIONSTACK_URL,
    timeout: 3000,
    timeoutErrorMessage: 'Request timeout'
})

instance.interceptors.request.use(
    request => {
        return request
    },
    error => {
        return handleError(error)
    }
)

instance.interceptors.response.use(
    response => response,
    error => {
        return handleError(error)
    }
)

module.exports = instance
