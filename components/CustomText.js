import { View, Text } from 'react-native'
import React from 'react'

const Custom = ({Fname, Lname}) =>{
    return(
        <View>
            <Text>Your First name is {Fname}! and Last name is {Lname}</Text>
        </View>
    )
}

const CustomText = () => {
  return (
    <View style={{alignItems:'center',top:50}}>
      <Custom Fname={'Thanadhon'} Lname={'Tubthonglang'}/>
      <Custom Fname={'Kanokphon'} Lname={'Singphu'}/>
    </View>
  )
}

export default CustomText