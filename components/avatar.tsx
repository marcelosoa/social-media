import { ComponentProps } from "react";
import { View, Image } from "react-native";

import { VariantProps, tv } from 'tailwind-variants'

type AvatarProps = ComponentProps<'img'> & VariantProps<typeof avatar> &{
  size: 'small' | 'normal'
  source: object
}

const avatar = tv({
  base: 'h-8 w-8 bg-white border-none rounded-full',
  variants: {
    size: {
      small: 'h-8 w-8',
      normal: 'h-12 w-12'
    }
  },
  defaultVariants: {
    size: 'small'
  }
})

export function AvatarComponent ({ size, source, ...props }: AvatarProps ) {
  return <Image source={source} className={avatar({size})} />
}