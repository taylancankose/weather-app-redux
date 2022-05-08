import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { changeCity, fetchCurrentWeather, fetchForecast } from '../redux/weatherSlice'

function CurrentWeather() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const dispatch= useDispatch()
    const current = useSelector(state => state.weather.items)
    const city = useSelector(state => state.weather.city)
    const cityData = useSelector(state => state.weather.cityItems)
    const isError = useSelector(state => state.weather.isError)

    useEffect(() => {
        dispatch(fetchCurrentWeather(city))
        dispatch(fetchForecast(city))
    }, [dispatch, city])

    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch((fetchCurrentWeather(city)))
      getDaysContent()
    }

    const getDaysContent = () => {
      let content = []
      for (let i= 1; i < 40; i += 8){
        content.push(
          <div class="flex-column">
          <img src={`https://openweathermap.org/img/wn/${cityData[0]?.list[i]?.weather[0]?.icon}@2x.png`} className='mx-auto'/>
          <p>{Math.round(cityData[0]?.list[i]?.main?.temp)}°C</p>
          <p>{days[new Date(cityData[0]?.list[i]?.dt*1000).getDay()]}</p>
          </div>
        )
      }
      return content
    }

   // if(isError){
   //   return alert('not found')
   // }
console.log(current)
  return (
    <section class="vh-100" style={{backgroundColor: '#cdc4f9'}}>
    <div class="container py-5 h-100 vertical-center">
      <form onSubmit={handleSubmit}>
        <input
          className=' mx-auto d-flex border-0 shadow'
          value={city}
          onChange={e => dispatch(changeCity(e.target.value))}
        />
      </form>
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-12 col-xl-10">
        <div class="card shadow border border-dark border-5 text-dark" style={{borderRadius: '10px'}}>
          <div class="card-body p-4">
            <div class="row text-center">
              <div class="col-md-9 text-center border-end border-5 border-dark py-4"
                style={{marginTop: '-1.5rem', marginBottom: '-1.5rem'}}>
                <div class="d-flex justify-content-around mt-3">
                  <p class="small"><strong>{current[0]?.name}</strong></p>
                  <p class="small">{new Date(current[0]?.dt*1000).toLocaleDateString("tr-TR")}</p>
                  <p class="small">By Codding Kitty</p>
                </div>
                <div class="d-flex justify-content-around align-items-center py-5 my-4">
                  <div>
                  <img src={`https://openweathermap.org/img/wn/${current[0]?.weather[0]?.icon}@2x.png`} />
                  <p class="small mb-0">{current[0]?.weather[0]?.description}</p>
                  </div>
                  <p class="fw-bold mb-0" style={{fontSize: '7rem'}}>{Math.round(current[0]?.main?.temp)}°C</p>
                  <div class="text-start">
                    <p class="small">
                    {new Date(current[0]?.dt).toLocaleTimeString("tr-TR")}
                    </p>
                    <p class="h3 mb-3">{days[new Date(current[0]?.dt*1000).getDay()]}</p>
                  </div>
                </div>
                <div class="d-flex justify-content-around align-items-center mb-3">
                  <div class="flex-column">
                    <i class="fas fa-minus"></i>
                  </div>
                    {getDaysContent(city)}
                  <div class="flex-column">
                    <i class="fas fa-minus"></i>
                  </div>
                </div>
              </div>
              <div class="col-md-3 text-center">
                <p class="small mt-3 mb-5 pb-5"><strong>Current Details</strong></p>
                <p class="pb-1"><span class="pe-2">Feels Like</span> <strong>{Math.round(current[0]?.main?.feels_like)}°C</strong></p>
                <p class="pb-1"><span class="pe-2">Max Temp:</span> <strong>{Math.round(current[0]?.main?.temp_max)}°C</strong></p>
                <p class="pb-1"><span class="pe-2">Min Temp:</span> <strong>{Math.round(current[0]?.main?.temp_min)}°C</strong></p>
                <p class="pb-1"><span class="pe-2">Wind:</span> <strong>{current[0]?.wind?.speed} m/s</strong></p>
                <p class="pb-1"><span class="pe-2">Humidity:</span> <strong>{current[0]?.main?.humidity} %</strong></p>
                <p class="pb-1"><span class="pe-2">Pressure:</span> <strong>{current[0]?.main?.pressure} hPa</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  )
}

export default CurrentWeather