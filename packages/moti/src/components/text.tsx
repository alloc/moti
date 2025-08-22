import { HostInstance, Text, TextProps, TextStyle } from 'react-native'
import { motify } from '../core'

const MotiText = motify<TextProps, HostInstance, TextStyle>(Text)()

export { MotiText as Text }
