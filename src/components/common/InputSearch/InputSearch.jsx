import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function InputSearch() {
  return (
    <View>
      <TextInput style={styles.input} placeholder={'test'}/>

    </View>
  )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      padding: 10,
      backgroundColor: '#F6F3F3',
      width: '80%',
      borderRadius: 30
    },
  });