import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const HomeScreen = ({route, navigation}) => {

  const {itemId} = route.params;

  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Text>Home Screen</Text>
      <Text>Initial param : item Id - {itemId}{'\n'}</Text>
      <Button 
        title='Update param'
        onPress={() => navigation.setParams({
          itemId: Math.floor(Math.random()*100)
        })}
      />
      <Text>{'\n'}</Text>
      <Button 
        title='Go to Details'
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})