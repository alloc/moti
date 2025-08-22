import { HostInstance, ScrollView, ScrollViewProps, ViewStyle } from 'react-native'
import { motify } from '../core'

const MotiScrollView = motify<ScrollViewProps, HostInstance, ViewStyle>(ScrollView)()

export { MotiScrollView as ScrollView }
