import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$code',
  backgroundColor: '$gray100',
})

export function ButtonComponent() {
  return <Button>Hello world</Button>
}
