import React from 'react';
import {Alert} from "react-native";
import Loading from "./components/Loading";
import * as Location from "expo-location";

export default class extends React.Component {
  state = {
    isLoading: true,
  }
  getLocation = async() => {
    try {
      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false});
      // send to API and get weather
      console.log(latitude, longitude);


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
