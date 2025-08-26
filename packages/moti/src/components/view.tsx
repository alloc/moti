import { View, ViewProps, ViewStyle } from 'react-native'
import { motify } from '../core'

const MotiView = motify<ViewProps, View, ViewStyle>(View)()

export { MotiView as View }
