import React from 'react';
import {Alert} from "react-native";
import Loading from "./components/Loading";
import * as Location from "expo-location";
import axios from "axios";
const WEATHER_API_KEY = process.env.REACT_APP_OPEN_WEATHER_KEY;

export default class extends React.Component {
  state = {
    isLoading: true,
  }
  getWeather = async(latitude, longitude) => {
    const {data} = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${WEATHER_API_KEY}`)

      console.log(data)
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false});


    } catch (error) {
      Alert.alert("Can't find you.", "so sad");
    }

  }
  componentDidMount() {
    this.getLocation();
  }
  render () {
    const {isLoading} = this.state;
  return (
    isLoading? <Loading /> : <></>
  );
  }
}
