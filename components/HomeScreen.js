import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Button 
        title='Go to Detail'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})