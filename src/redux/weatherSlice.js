import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchCurrentWeather= createAsyncThunk('weather/fetchCurrentWeather', async(city) => {
    const res = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=727a397bd40210a227143997b5ee9bd6&units=metric`)
    return res.data;
})


export const fetchForecast = createAsyncThunk('weater/fetchForecast', async(city) => {
    const res = await axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=727a397bd40210a227143997b5ee9bd6&units=metric`)
    return res.data;
})

export const weatherSlice = createSlice({
    name: 'weather',
    initialState:{
        items:[],
        isLoading: false,
        city: 'london',
        cityItems: [],
        isError: false,
    },
    reducers: {
        changeCity: (state, action) => {
            state.city = action.payload
        }
    },
    extraReducers: {
        [fetchCurrentWeather.fulfilled]: (state, action) => {
            state.items = [action.payload]
            state.isLoading = false
        },
        [fetchCurrentWeather.rejected]: (state, action) => {
            state.items = [action.payload]
            state.isError = true
        },
        [fetchForecast.fulfilled]: (state, action) => {
            state.cityItems = [action.payload]
            state.isLoading = false
        }
    }
})


export const {changeCity} = weatherSlice.actions
export default weatherSlice.reducer
