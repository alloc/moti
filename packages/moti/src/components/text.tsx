import { Text, TextProps, TextStyle } from 'react-native'
import { motify } from '../core'

const MotiText = motify<TextProps, Text, TextStyle>(Text)()

export { MotiText as Text }
