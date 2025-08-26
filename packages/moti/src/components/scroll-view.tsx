import { ScrollView, ScrollViewProps, ViewStyle } from 'react-native'
import { motify } from '../core'

const MotiScrollView = motify<ScrollViewProps, ScrollView, ViewStyle>(
  ScrollView
)()

export { MotiScrollView as ScrollView }
