import React, {Component} from 'react';
import './App.css';
import WeatherDisplay from './Components/WeatherDisplay/WeatherDisplay';
import Background from './Components/Background/Background';

const getWeather = async (cb) => {
  const apiKey = 'dc8a121584ffbfcf09d4045a99abfab4'
  const {latitude,longitude} = await getPositionAsync() 
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
  const data = await response.json()
  // console.log(data)
  cb(data)
	// return data
}

const getPositionAsync = () => new Promise((resolve) => {
  navigator.geolocation.getCurrentPosition(({coords}) => {
    resolve(coords)
  })
})



// function getPosition() {
//   return Promise.resolve()
//     .then((resolve, reject) => {
//     navigator.geolocation.getCurrentPosition(resolve);
//   })
// }

// function getWeather(coords) {
//   return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
//     .then(resp => resp.json());
// }

// getPosition()
//   .then(getWeather)
//   .then(displayyWeather)










class App extends Component{
  constructor(){
    super()
    this.state={
      data: null
    }

    getWeather(data => this.setState({
      data: data 
    }))
}

  // success=(position)=>{
  //   const latitude = position.coords.latitude;
  //   const longitude = position.coords.longitude;
      // return {latitude, longitude}
  // }
  // error=()=>{
  //   // you need to have geolocation enabled
  // }
  // navigator.geolocation.getCurrentPosition(success, error);
  
  
render(){
  return (
    <div className="App">
        {this.state.data ? <WeatherDisplay data={this.state.data}/> : ''}
        {this.state.data ? <Background data={this.state.data}/> : ''}
      </div>
    );
  }
}

export default App;
