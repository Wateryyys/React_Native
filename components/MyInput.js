import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-web';

const MyInput = () => {

    const [text, setText] = useState('');

  return (
    <View style = {styles.container}>
        <TextInput
            placeholder = 'Enter Text'
            style = {styles.textInputStyle}
            value = {text}
            onChangeText = {(value) => {setText(value)}}
        />
      
        <Text>{'\n\n'} You typed: {text}</Text>
        <Text>{'\n\n'}</Text>
        <Button
            title = 'Reset'
            onPress = {() => setText('Hellp!!!')}/>
    </View>
  )
}

export default MyInput

const styles = StyleSheet.create({
    container: {
        flex : 1,
        padding : 35,
    },
    textInputStyle: {
        width : '100%',
        height : 40,
        paddingHorizontal : 5,
        bordderWidth : 0.5,
        marginTop : 15,
    }
})

