import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Recap = () => {

    const [textInputName, setInputName] = useState('')
    const [textInputEmail,setInputEmail] = useState('')

    const alertInput = () =>{
        alert(
            'email: ' + textInputEmail +
            '\npassword: ' +textInputName 
        )   
    }

  return (
    <View style = {styles.container}>
        <TextInput 
                placeholder = 'Enter Name'
                style = {styles.input}
                value = {textInputName}
                onChangeText = {(value) => setInputName}
        />
        <TextInput 
                placeholder = 'Enter Email'
                style = {styles.input}
                value = {textInputEmail}
                onChangeText = {(value) => setInputEmail}
        />
        <Text>{'\n\n'}</Text>
        <Button
            title = 'SUBMIT'
            onPress = {alertInput}
            />        
    </View>
    
  )
}

export default Recap

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40
    },
    submitButtonText: {
        color: 'white'
    }
})