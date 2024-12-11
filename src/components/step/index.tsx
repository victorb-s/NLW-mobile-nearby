import React from 'react'
import { View, Text } from 'react-native'
import { IconProps } from '@tabler/icons-react-native'

import { styles } from './styles'
import { colors } from '@/styles/theme'

type Props = {
  title: string
  description: string
  icon: React.ComponentType<IconProps>
}

export const Step = ({ title, description, icon: Icon }: Props) => {
  return (
    <View style={styles.container}>
      {Icon && <Icon size={32} color={colors.red.base} />}
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}
