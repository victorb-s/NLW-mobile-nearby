import React from 'react'
import { ActivityIndicator } from 'react-native'
import { styles } from './styles'
import { colors } from '@/styles/theme'

const Loading = () => {
  return (
    <ActivityIndicator
        color={colors.green.base}
        style={styles.container}
    />
  )
}

export default Loading