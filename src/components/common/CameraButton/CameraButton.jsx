import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Camera, CameraType } from 'expo-camera';

export default function CameraButton() {

    
  return (
    <TouchableOpacity 
    activeOpacity={0.7}
    style={styles.touchableOpacityStyle}
    >
        <MaterialCommunityIcons name='camera' size={40}/>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    touchableOpacityStyle: {
      position: 'absolute',
      width: 70,
      height: 70,
      alignItems: 'center',
      justifyContent: 'center',
      right: 30,
      bottom: 100,
      borderRadius: 100,
      backgroundColor: '#F1DA0E'
    },
  });