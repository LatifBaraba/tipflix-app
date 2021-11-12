import { createSlice } from '@reduxjs/toolkit'
import { axiosInstance } from '../utilities/helper/axiosInstance'
import history from '../history'

const initialState = {
    data: [],
    loading: false
}

export function fetchMovie() {
    return async dispatch => {
        dispatch(getMovie())
        try {
            const response = await axiosInstance(history)(`movie/now_playing?${process.env.REACT_APP_API_KEY}`, {
                method: 'GET',
            })
            const result = await response
            console.log(result)
            dispatch(getMovieSuccess(result.data))
        } catch (error) {
            dispatch(getMovieFailure())
        }
    }
}

export const movie = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        getMovie: state => {
            state.loading = true
        },
        getMovieSuccess: (state, { payload }) => {
            state.data = payload
            state.loading = false
        },
        getMovieFailure: state => {
            state.loading = false
        },
    },
})

export const { getMovie, getMovieSuccess, getMovieFailure } = movie.actions

export default movie.reducer
