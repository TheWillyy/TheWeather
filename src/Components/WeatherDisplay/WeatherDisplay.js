import React from 'react'
import './WeatherDisplay.css'

const WeatherDisplay =({data}) =>{
    console.log("[the data]",data)
    let sunrise=new Date(data.sys.sunrise*1000);
    let sunset=new Date(data.sys.sunset*1000);
    return(
        <div className='container'>
            <div className='container__weather'>
                <div id='weather__desc--short'>
                    <img alt={`i`} src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}/>
                    {data.weather[0].main}
                </div>
                <div id='weather__desc--long'>{data.weather[0].description}</div>
                <div id='weather__temp'>{Math.round((data.main.temp_min)-273)}&deg;c</div>
                <div id='weather__high-low'>
                    <div>Min: {Math.round((data.main.temp_min)-273)}&deg;c</div>
                    <div>Max: {Math.round((data.main.temp_max)-273)}&deg;c</div>
                </div>
                <div id='weather__city'>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="42" viewBox="0 0 24 42">
                        <path id="Subtraction_1" data-name="Subtraction 1" class="cls-1" d="M12,42h0L1.19,16.879a11.627,11.627,0,0,1-.473-1.1L.66,15.647H.669A11.572,11.572,0,0,1,.943,7.185a11.694,11.694,0,0,1,1.106-2A11.9,11.9,0,0,1,3.515,3.446,12.054,12.054,0,0,1,9.582.239a12.355,12.355,0,0,1,4.837,0,12.045,12.045,0,0,1,6.067,3.207,11.9,11.9,0,0,1,1.465,1.741,11.694,11.694,0,0,1,1.106,2,11.6,11.6,0,0,1,.274,8.462h.009l-.056.131a11.613,11.613,0,0,1-.473,1.1L12,42ZM12,2.588A9.518,9.518,0,0,0,2.4,12,9.518,9.518,0,0,0,12,21.412,9.518,9.518,0,0,0,21.6,12,9.518,9.518,0,0,0,12,2.588Z" transform="translate(0 0)"/>
                        </svg>
                        change into flaticon thing */}
                {data.name}
                </div>
            </div>
            <div id='container__suntime'>
                <div className='suntime'>
                    <div>{`${sunrise.getHours()}:${sunrise.getMinutes()<10?`0${sunrise.getMinutes()}`:sunrise.getMinutes()}`}</div>
                    <div>Sunrise</div>
                </div>
                <div className='suntime'>
                    <div>{`${sunset.getHours()}:${sunset.getMinutes()<10?`0${sunset.getMinutes()}`:sunset.getMinutes()}`}
                    </div>
                    <div>Sunset</div>
                </div>
            </div>
        </div>

    );
}
export default WeatherDisplay;
//dont forget to check all the possible weather conditions in the api and grab the corresponding background image