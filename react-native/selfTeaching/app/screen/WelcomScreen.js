// import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
// import {  } from "@react-native-community/hooks" 

import React from 'react'
// import { View } from 'react-native';

function WelcomScreen() {
  const image = { uri: 'https://www.appstudio.ca/blog/wp-content/uploads/2020/10/Capture-Sales-with-These-Strategies-for-Your-Online-Store.jpg' };
  const logo = { uri: 'https://assets.turbologo.com/blog/en/2018/03/19085254/prozrachniy-logo-1.png' };
  return (
    <ImageBackground
      style={styles.background}
      source={image}
    >
      <View style={styles.logoConatiner}>
        <Image style={styles.logo} source={logo}/>
        <Text>My first react-native app</Text>
      </View>
      <View style={styles.loginButton}>
        <Text>Login</Text>
      </View>
      <View style={styles.registerButton}>
        <Text>Register</Text>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: "#fc5c65"
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: "#4ecdc4"
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoConatiner: {
    position: 'absolute',
    top: 50,
    alignItems: "center"
  }
})

export default WelcomScreen;