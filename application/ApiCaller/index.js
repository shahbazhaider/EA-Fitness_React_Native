import ConfigApp from "../utils/ConfigApp";
import {APIS} from "./APIs";


const BASE_API_CALLER = async (endpoint='', method='', body={}) => {
    try {
        const response = await fetch(`${ConfigApp.URL}` + `${endpoint}`, {
            method,
            headers: {
                'content-type': 'multipart/form-data',
            },
            body

        }).then(response => response.json())

        return response

    } catch (error) {
        return String(error?.message)
    }
}

export const onRegister = async (formData) => {
    try {
        const response = await BASE_API_CALLER(APIS.REGISTRATION_API, 'POST', formData)
        return response
    } catch (error) {
        return error?.message || ''
    }
}

export const onLogin = async (formData) => {
    try {
        const response = await BASE_API_CALLER(APIS.LOGIN_API, 'POST', formData)
        return response
    } catch (error) {
        return error?.message || ''
    }
}

export const onResetPassword = async (formData) => {
    try {
        const response = await BASE_API_CALLER(APIS.RESET_PASSWORD_API, 'POST', formData)
        return response
    } catch (error) {
        return error?.message || ''
    }
}

export const onFetchGoals = async () => {
    try {
        const response = await BASE_API_CALLER(APIS.FETCH_GOALS_API, 'GET')
        return response
    } catch (error) {
        return error?.message || ''
    }
}