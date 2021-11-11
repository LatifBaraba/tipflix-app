import axios from "axios"
import Toast from './toast-helper'

export const axiosInstance = (history = null) => {

    const DEV = process.env.REACT_APP_BASE_URL_DEV
    const PROD = process.env.REACT_APP_BASE_URL_DEV
    
    const baseURL = DEV
    // const baseURL = process.env.REACT_APP_BASE_URL_PROD

    let headers = {}

    if (localStorage.token) {
        headers.Authorization = `Bearer ${localStorage.token}`
    }

    const axiosInstance = axios.create({
        baseURL: (baseURL === DEV) ? DEV : PROD,
        headers,
    });

    axiosInstance.interceptors.response.use(
        (response) =>
            new Promise((resolve, reject) => {
                (baseURL === DEV) && console.log('resolved', response)
                console.log('resolved')
                resolve(response)
            }),
        (error) => {
            if (!error.response) {
                return new Promise((resolve, reject) => {
                    (baseURL === DEV) && console.log('rejected', error)
                    console.log('rejected')
                    reject(error)
                })
            }

            if (error.response.status === 401) {
                localStorage.removeItem("token")
                Toast('warning', 'Un-Authorized', 'bottom-center')
                // if (history) {
                //     history.push("/auth/login")
                // } else {
                //     window.location = "/auth/login"
                // }
            } else {
                return new Promise((resolve, reject) => {
                    reject(error)
                })
            }
        }
    );

    return axiosInstance
};
