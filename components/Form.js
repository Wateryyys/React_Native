import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Form = () => {

    const [name,SetName] = useState('Talyor')
    const [age,setAge] = useState(42);

  return (
    <View style = {styles.container}>
        <TextInput
            placeholder='Enter your name'
            style = {styles.textInputStyles}
            value= {name}
            onChangeText={(value) => {SetName(value)}}
        />
        <Text>{'\n\n'}</Text>
        <Button
            title = 'INCREMENT AGE'
            onPress= {() => setAge(a => a + 1)}/>
        <Text>{'\n\n'}</Text>
        <Text>Hello,{name}. You are {age}</Text>
    </View>
  )
}

export default Form

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
    textInputStyles: {
        width: '100%',
        height: 40,
        paddingHorizontal: 5,
        borderWidth: 0.5,
        marginTop: 15,
    },
})