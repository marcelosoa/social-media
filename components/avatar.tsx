import { ComponentProps } from "react";
import { View, Image } from "react-native";

import { VariantProps, tv } from 'tailwind-variants'

type AvatarProps = ComponentProps<'img'> & VariantProps<typeof avatar> &{
  size: 'small' | 'normal' | 'large'
  source: object
}

const avatar = tv({
  base: 'h-8 w-8 bg-white border-none rounded-full',
  variants: {
    size: {
      small: 'h-8 w-8',
      normal: 'h-12 w-12',
      large: 'h-24 w-24',
    }
  },
  defaultVariants: {
    size: 'normal'
  }
})

export function AvatarComponent ({ size ,source }: AvatarProps ) {
  return <Image source={source} className={avatar({size})} />
}