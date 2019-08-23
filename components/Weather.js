import React from "react";
import {StyleSheet, View, Text, StatusBar} from "react-native";
import PropTypes from "prop-types";
import {MaterialCommunityIcons} from "@expo/vector-icons"; 
import {LinearGradient} from "expo-linear-gradient";


const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunder storm",
        subtitle: "Don't go outside"
      },
      Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Like rain, not rain"
      },
      Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Raing",
        subtitle: "For more info, look outside"
      },
      Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "Do you want to build a snowman? Okay Bye.."
      },
      Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subtitle: "Atmosphere??"
      },
      Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Clear",
        subtitle: "Go get burn yourself"
      },
      Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "Grey Sky..."
      },
      Mist: {
        iconName: "weather-hail",
        gradient: ["#00c3ff", "#ffff1c"],
        title: "Mist",
        subtitle: "You like mist?"
      },
      Dust: {
        iconName: "robot-industrial",
        gradient: ["#20002c", "#cbb4d4"],
        title: "Dust",
        subtitle: "Thanks for China.."
      },
      Haze: {
        iconName: "weather-fog",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
      }
}

export default function Weather({temp, condition}) {
    
    return (
    // <View style={styles.container}>
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content" />
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
                    <Text style={styles.temp}>
                        {temp} °
                    </Text>
                </View>
                <View style={{...styles.halfContainer, ...styles.textConatiner}}>
             
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subtitle}>{weatherOptions[condition].subtitle} </Text>

                </View>
        </LinearGradient>
    // </View>
     )
}
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Sonw",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust",
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    halfContainer: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 42,
        color: "white",
    },
    title: {
        color: "white",
        fontSize: 48,
        fontWeight: "300",
        marginBottom: 10,
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 34,
    },
    textConatiner: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})