import React, { Component} from 'react'
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine} from 'react-sparklines';

 class WeatherList extends Component{
   renderWeather(cityData){
     const name = cityData.city.name;
     const temps = cityData.list.map(weather => weather.main.temp)
     console.log(temps);

     return (
       <tr key ={name}>
        <td>{name}</td>
        <td>
           <Sparklines height ={120} width={180} data={temps}>
            <SparklinesLine color ="red" />
           </Sparklines>
        </td>
      </tr>
     )
   }

  render(){
    return(
      <table className ="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temparature</th>
            <th>Pressure</th>
            <th>Humidity</th>

          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );

  }
}

function mapStateToprops({weather}){
  return {weather};
}

export default connect(mapStateToprops)(WeatherList)
