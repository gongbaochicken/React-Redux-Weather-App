import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{
  renderWeather(cityData){
    console.log(cityData);
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const description = cityData.list[0].weather[0].description;
    console.log(description);

    return(
      <tr key={cityData.city.name}>
        <td>
          {cityData.city.name}
        </td>
        <td>
          {description}
        </td>
        <td><Chart data={temps} color="orange" /></td>
        <td><Chart data={pressures} color="red" /></td>
        <td><Chart data={humidities} color="purple" /></td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <tr>
          <th>City</th>
          <th>Description</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
  //{weather: weather}
}

export default connect(mapStateToProps)(WeatherList);
