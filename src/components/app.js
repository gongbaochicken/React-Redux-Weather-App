import React, { Component } from 'react';
import SearchBar from '../containers/searchBar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>5-Day Weather Forecast in React Demo</h2>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}
