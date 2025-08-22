import { HostInstance, View, ViewProps, ViewStyle } from 'react-native'
import { motify } from '../core'

const MotiView = motify<ViewProps, HostInstance, ViewStyle>(View)()

export { MotiView as View }
