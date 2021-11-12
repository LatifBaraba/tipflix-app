import { createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../utilities/helper/axiosInstance'
import history from '../history'

const initialState = {
    data: [],
    loading: false
}

export function fetchTv() {
    return async dispatch => {
        dispatch(getTv())
        try {
            const response = await axiosInstance(history)(`tv/airing_today?${process.env.REACT_APP_API_KEY}`, {
                method: 'GET',
            })
            const result = response.data
            console.log(result)
            dispatch(getTvSuccess(result))
        } catch {
            dispatch(getTvFailure())
        }
    }
}

export const tv = createSlice({
    name: 'tv',
    initialState,
    reducers: {
        getTv: state => {
            state.loading = true
        },
        getTvSuccess: (state, { payload }) => {
            state.data = payload
            state.loading = false
        },
        getTvFailure: state => {
            state.loading = false
        },
    },
})

export const { getTv, getTvSuccess, getTvFailure } = tv.actions

export default tv.reducer
