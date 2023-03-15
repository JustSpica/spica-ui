import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { AvatarFallback, AvatarImage, AvatarRoot } from '../styles/Avatar'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarRoot>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarRoot>
  )
}
