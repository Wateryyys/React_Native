import { StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Alert, 
  Button } 
from 'react-native'
import React from 'react'

const Separator = () => <View style = {styles.separator}/>


const App = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <View>
        <Text style = {styles.title}>
        The title and onPress handler are required. It is recommended to set
        accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
          title = 'Press me'
          onPress = {() => alert('Simple Button press')}/>
          <Separator/>
      </View>
      <View>
        <Text style = {styles.title}>
        Adjust the color in a way that looks standard on each platform. On iOS,
        the color prop controls the color of the text. On Android, the color
        adjusts the background color of the button.
        </Text>
        <Button
          title = 'Press me'
          onPress = {() => alert('Simple Button press')}
          color= 'green'/>
          <Separator/>
      </View>
      <View>
        <Text style = {styles.title}>
        All interaction for the component are disabled.
        </Text>
        <Button
          title = 'Press me'
          onPress = {() => alert('Simple Button press')}
          color= 'pink'
          disabled/>          
          <Separator/>
      </View>
      <View>
        <Text>This layout strategy lets the title define the width of the button.</Text>
        <View style = {styles.fixToText}>
          <Button
            title='Left Button'
            onPress = {() => alert('Left button pressed')} 
          />
          <Button
            title='Right Button'
            onPress = {() => alert('Right button pressed')} 
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16
  },
  title: {
    textAlign: 'center',
    marginVertical: 8
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
//