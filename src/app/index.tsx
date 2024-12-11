import { View, Text } from 'react-native'
import React from 'react'

const Index = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Text
        style={{
          fontSize: 22
        }}
      >
        Hello React Native
      </Text>
    </View>
  )
}

export default Index