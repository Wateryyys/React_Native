import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View
      style = {[
        styles.container, {flexDirection: 'column'}
      ]}
      >        
        {/* <View style = {[flex:1, backgroundColor: 'red']}>
        <View style = {[flex:2, backgroundColor: 'red']}/>
        <View style = {[flex:3, backgroundColor: 'red']}/> */}
        <View style = {[flex:1, BackgorundColor:'powerbule']}/>
        <View style = {[flex:1, BackgorundColor:'skybule']}/>
        <View style = {[flex:1, BackgorundColor:'stealbule']}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
     flex:1,     
  }
 })
