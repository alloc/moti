import { HostInstance, Image, ImageProps, ImageStyle } from 'react-native'
import { motify } from '../core'

const MotiImage = motify<ImageProps, HostInstance, ImageStyle>(Image)()

export { MotiImage as Image }
