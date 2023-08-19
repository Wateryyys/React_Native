import { View, Text } from 'react-native'
import React from 'react'
import TouchableExample from './components/TouchableExample'
import RecapTouchable from './components/RecapTouchable'
import Example_UseEffect from './components/Example_UseEffect'
import UseEffectFlatList from './components/UseEffectFlatList'
import RandomUsersScreen from './components/RandomUsersScreen'

const App = () => {
  return (
    <View>
      {/* <TouchableExample/> */}
      {/* <RecapTouchable/> */}
      {/* <Example_UseEffect/> */}
      {/* <UseEffectFlatList/> */}
      <RandomUsersScreen/>
    </View>
  )
}

export default App