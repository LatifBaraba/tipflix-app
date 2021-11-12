import axios from 'axios'
import Toast from './toast'

export const axiosInstance = (history = null) => {
    const baseURL = process.env.REACT_APP_BASE_URL

    const axiosInstance = axios.create({
        baseURL: baseURL,
    })

    axiosInstance.interceptors.response.use(
        response =>
            new Promise(resolve => {
                // console.log('resolved')
                resolve(response)
            }),
        error => {
            if (!error.response) {
                return new Promise(reject => {
                    // console.log('rejected')
                    reject(error)
                })
            }
        },
    )

    return axiosInstance
}
