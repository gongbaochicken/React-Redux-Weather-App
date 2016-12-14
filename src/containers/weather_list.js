import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';

class WeatherList extends Component{
  renderWeather(cityData){
    const temps = cityData.list.map(weather => weather.main.temp);
    console.log(temps);

    return(
      <tr key={cityData.city.name}>
        <td>{cityData.city.name}</td>
        <td>
          <Sparklines heigth={70} width={70} data={temps}>
            <SparklinesLine color= "purple" />
          </Sparklines>
        </td>
      </tr>
    );
  }

  render(){
    return(
      <table className="table table-hover">
        <tr>
          <th>City</th>
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
