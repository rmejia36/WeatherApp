import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import {colors} from '../utils/index'
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'


const {PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR} = colors
export default function WeatherDetails({currentWeather, unitsSystem}) {
    const{
        main: {feels_like, humidity, pressure},
        wind: {speed},
    } = currentWeather

    const windSpeed = unitsSystem === 'metric' ? `${Math.round(speed)} m/s` : `${Math.round(speed)} mph`


  return (
    <View style={styles.weatherDetails}>
      <View style={styles.weatherDetailsRow}>
          <View style={{...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR,}}>
              <View style={styles.weatherDetailsRow}>
                <FontAwesome5 name="temperature-low" size={25} color={PRIMARY_COLOR}></FontAwesome5>
                <View style={styles.weatherDetailsItem}>
                    <Text style={styles.secondaryText}>Feels like:</Text>
                    <Text>{feels_like}°</Text>
                </View>
              </View>
          </View>
          <View style={{...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR,}}>
          <View style={styles.weatherDetailsRow}>
                <MaterialCommunityIcons name="water" size={25} color={PRIMARY_COLOR}></MaterialCommunityIcons>
                <View style={styles.weatherDetailsItem}>
                    <Text style={styles.secondaryText}>Humidity:</Text>
                    <Text>{humidity}%</Text>
                </View>
              </View>
          </View>
        </View>

        <View style={{ ...styles.weatherDetailsRow, borderTopWidth: 1, borderTopColor: BORDER_COLOR}}>
          <View style={{...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR,}}>
              <View style={styles.weatherDetailsRow}>
                <MaterialCommunityIcons name="weather-windy" size={25} color={PRIMARY_COLOR}></MaterialCommunityIcons>
                <View style={styles.weatherDetailsItem}>
                    <Text style={styles.secondaryText}>Wind:</Text>
                    <Text>{windSpeed}</Text>
                </View>
              </View>
          </View>
          <View style={{...styles.weatherDetailsBox, borderRightWidth: 1, borderRightColor: BORDER_COLOR,}}>
          <View style={styles.weatherDetailsRow}>
                <MaterialCommunityIcons name="speedometer" size={25} color={PRIMARY_COLOR}></MaterialCommunityIcons>
                <View style={styles.weatherDetailsItem}>
                    <Text style={styles.secondaryText}>Pressure:</Text>
                    <Text>{pressure} hPa</Text>
                </View>
              </View>
          </View>
        </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
    weatherDetails:{
        marginTop: 'auto',
        margin: 15,
        marginBottom: 40,
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherDetailsBox: {
        flex: 1,
        padding: 20,
    },
    weatherDetailsItem: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    secondaryText: {
        fontSize: 15,
        fontWeight: "700",
        color: SECONDARY_COLOR,
        margin: 7,
    }
})