import { Image, ImageProps, ImageStyle } from 'react-native'
import { motify } from '../core'

const MotiImage = motify<ImageProps, Image, ImageStyle>(Image)()

export { MotiImage as Image }
