import { usePresence, PresenceContext } from 'framer-motion'
import React, {
  forwardRef,
  ComponentType,
  FunctionComponent,
  useContext,
  RefAttributes,
  ForwardRefExoticComponent,
} from 'react'
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native'
import Animated, {
  BaseAnimationBuilder,
  EntryExitAnimationFunction,
  LayoutAnimationFunction,
} from 'react-native-reanimated'

import type { MotiProps } from './types'
import { useMotify } from './use-motify'

export interface MotifyComponent<
  Props extends object,
  Ref,
  Animate = ViewStyle | ImageStyle | TextStyle
> extends ForwardRefExoticComponent<
    Props & AnimatedProps<Props> & MotiProps<Animate> & RefAttributes<Ref>
  > {}

export default function motify<
  Props extends object,
  Ref,
  Animate = ViewStyle | ImageStyle | TextStyle
>(
  BaseComponent: ComponentType<Props>
): () => MotifyComponent<Props, Ref, Animate> {
  const AnimatedComponent = Animated.createAnimatedComponent(
    BaseComponent as FunctionComponent<any>
  )

  const withAnimations = () => {
    const Motified = forwardRef(function Moti(props: { style?: any }, ref) {
      const animated = useMotify({
        ...props,
        usePresenceValue: usePresence(),
        presenceContext: useContext(PresenceContext),
      })

      return (
        <AnimatedComponent
          {...props}
          style={props.style ? [props.style, animated.style] : animated.style}
          ref={ref}
        />
      )
    })

    Motified.displayName = `Moti.${
      BaseComponent.displayName || BaseComponent.name || 'NoName'
    }`

    return Motified
  }

  return withAnimations
}

// copied from reanimated
// if we use Animated.AnimateProps
// then we get this TypeScript error:
// Exported variable 'View' has or is using name 'AnimatedNode' from external module "react-native-reanimated" but cannot be named.
type AnimatedProps<Props> = {
  animatedProps?: Partial<Props>
  layout?:
    | BaseAnimationBuilder
    | LayoutAnimationFunction
    | typeof BaseAnimationBuilder
  entering?:
    | BaseAnimationBuilder
    | typeof BaseAnimationBuilder
    | EntryExitAnimationFunction
    | Keyframe
  exiting?:
    | BaseAnimationBuilder
    | typeof BaseAnimationBuilder
    | EntryExitAnimationFunction
    | Keyframe
}
