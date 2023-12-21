import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
const { height, width } = Dimensions.get("window")
import AnalogWatch from './Analog'
import Calendar from './Celnder'
import SwipeableList from './Swippable'
import SwipeableItem from './Swippable'
import Swipe from './swipe'
const App = () => {


  return (
    <LinearGradient
      colors={['#27869f', '#7deccd']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={{ flex: 1 }}
    >

      <TouchableOpacity
        style={styles.skipButton}
      >
        <Text
          style={styles.skiptetxt}
        >
          Skip it
        </Text>
      </TouchableOpacity>
      <Text
        style={styles.GreetText}
      >
        Hi,
      </Text>
      <Text style={[styles.GreetText, { marginTop: -height * 0.025 }]}>
        Mohamed
      </Text>
      <Text
        style={styles.welcomeText}
      >
        Welcome back to <Text style={styles.welcomeTextY}>youth</Text> World
      </Text>
      <View
        style={styles.timewidget}
      >
        <AnalogWatch />
        <Calendar />
      </View>
      <Swipe />
      <View
        style={{
          flexDirection: "row"
        }}
      >
        <Text
          style={styles.welcomeTextz}
        >Socials</Text>
        {/* <Text
          style={{
            backgroundColor: "rgba(250, 250, 250, 0.75)",
            fontSize: width * 0.029,
            // fontFamily: "Montserrat-ExtraBold",
            paddingLeft: width * 0.5,
            marginTop: height * 0.02,
            alignSelf: "flex-end"

          }}
        >Socials</Text> */}
      </View>
      <SwipeableItem />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "white",
          width: width * 0.63,
          height: height * 0.045,
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "center",
          borderRadius: 10,
          marginTop: height * 0.0125
        }}
      >
        <Text
          style={styles.welcomeTextzO}
        >
          Change This widget
        </Text>
      </TouchableOpacity>

    </LinearGradient>
  )
}

export default App

const styles = StyleSheet.create({
  skipButton: {
    height: height * 0.04,
    backgroundColor: "white",
    width: width * 0.18,
    borderRadius: 5,
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: height * 0.0225,
    marginRight: width * 0.045
    // marginLeft
  },
  skiptetxt: {
    color: "#27869f",
    textAlign: "center",
    fontWeight: "800"

    // textAlignVertical: "center"
  },
  GreetText: {
    color: "white",
    fontSize: width * 0.15,
    fontFamily: "Montserrat-ExtraBold",
    // paddingLeft: width * 0.04,
    // backgroundColor: "red",
    width: width * 0.85,
    alignSelf: "center"
  },
  welcomeText: {
    color: "black",
    fontSize: width * 0.049,
    fontFamily: "Montserrat-ExtraBold",
    // paddingLeft: width * 0.04,
    marginTop: -height * 0.01,
    width: width * 0.85,
    alignSelf: "center"
  },
  welcomeTextY: {
    color: "white",
    fontSize: width * 0.049,
    fontFamily: "Montserrat-ExtraBold",
    // paddingLeft: width * 0.04,

  },
  timewidget: {
    height: height * 0.22,
    width: width * 0.83,
    backgroundColor: "rgba(250, 250, 250, 0.75)",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: height * 0.012,
    flexDirection: "row",
    justifyContent: "space-around",
    // alignContent: ""
    alignItems: "center",
    paddingHorizontal: width * 0.015
  },
  welcomeTextz: {
    color: "rgba(250, 250, 250, 0.75)",
    fontSize: width * 0.039,
    fontFamily: "Montserrat-ExtraBold",
    paddingLeft: width * 0.1,
    marginTop: height * 0.02

  },
  welcomeTextzO: {
    color: "white",
    fontSize: width * 0.035,
    fontFamily: "Montserrat-ExtraBold",
    textAlign: "center",
    // marginTop: height * 0.0.=25
    // paddingLeft: width * 0.1,
    // marginTop: height * 0.02

  },
})