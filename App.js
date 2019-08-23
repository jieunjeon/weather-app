import React from 'react';
import {Alert} from "react-native";
import Loading from "./components/Loading";
import Weather from "./components/Weather";

import * as Location from "expo-location";
import axios from "axios";
const OPEN_WEATHER_APP_KEY = "dd31325efdb743266a56da44a5122db6";


export default class extends React.Component {
  state = {
    isLoading: true,
  }
  getWeather = async(latitude, longitude) => {
    console.log("key", OPEN_WEATHER_APP_KEY);
    const {
      data: {
        main: {temp},
        weather
      }} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${OPEN_WEATHER_APP_KEY}&units=metric`)

      this.setState({isLoading: false, temp: temp, condition: weather[0].main})
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);

    } catch (error) {
      Alert.alert("Can't find you.", "so sad");
    }

  }
  componentDidMount() {
    this.getLocation();
  }
  render () {
    const {isLoading, temp, condition} = this.state;
  return (
    isLoading? <Loading /> : <Weather temp={Math.round(temp)} condition={condition} />
  );
  }
}
