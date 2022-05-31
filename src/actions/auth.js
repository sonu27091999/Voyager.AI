import axios from "axios";
const BASE_URL='https://identitytoolkit.googleapis.com/v1/';
const API_KEY='AIzaSyDf8IG_gI8Sn3Lt3ukrEtQnw9c9NgfKOEo';
export const signupWithEmailPassword = (details, callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}/accounts:signUp?key=${API_KEY}`, {
                email: details.email,
                password: details.password,
                returnSecureToken: true
            })
            // console.log(response);
            dispatch({
                type: 'SIGNUP',
                payload: response.data
            })
            return callback(response.data);
        } catch (error) {
            // console.log(error.response);
            return callback({
                error: true,
                response: error.response
            })
        }
    }
}

export const loginWithEmailAndPassword = (details, callback) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${BASE_URL}accounts:signInWithPassword?key=${API_KEY}`, {
                email: details.email,
                password: details.password,
                returnSecureToken: true
            })
            // console.log(response);
            dispatch({
                type: 'LOGIN',
                payload: response.data
            })
            return callback(response.data);
        } catch (error) {
            // console.log(error.response);
            return callback({
                error: true,
                response: error.response
            })
        }
    }
}