import { ViewStyle } from 'react-native'
import {
  NativeSafeAreaViewInstance,
  SafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context'
import { motify } from '../core'

const MotiSafeAreaView = motify<
  SafeAreaViewProps,
  NativeSafeAreaViewInstance,
  ViewStyle
>(SafeAreaView)()

export { MotiSafeAreaView as SafeAreaView }
