import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import { BarChart } from 'react-d3';

class WeatherList extends Component {
  renderWeather(cityData) {
      const name = cityData.city.name;
      const barData = cityData.list.map((weather)=> {
        const objectOfData = {label: weather.dt_txt, value: weather.main.temp};
        return objectOfData;
      });
      console.log(barData);
      // // const pressures = cityData.list.map(weather => weather.main.pressure);
      // // const humidities = cityData.list.map(weather => weather.main.humidity);
      const { lon, lat } = cityData.city.coord;

      return (
        <tr key={name}>
          <td><GoogleMap lon={lon} lat={lat} /></td>
          <td><BarChart
            data={barData}
            width={200}
            height={100}
            fill={'#3182bd'}
          />
          </td>
          {/* <td><Chart data={temps} units='°C' /></td> */}
          {/* <td><Chart data={pressures} color='black' units='hPa' /></td>
          <td><Chart data={humidities} color='blue' units='%' /></td> */}
        </tr>
      );
  }
  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather.bind(this))}
        </tbody>
      </table>
    );
  }
}
function mapStateToProps({weather}) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList);
