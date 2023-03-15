import { styled } from '../theme'

export const MultiStepStyled = styled('div', {})

export const LabelStep = styled('span', {
  margin: 0,
  fontFamily: '$default',
  fontSize: '$xs',
  lineHeight: '$base',
  color: '$gray200',
})

export const Steps = styled('div', {
  marginTop: '$1',
  display: 'grid',
  gridTemplateColumns: 'repeat(var(--steps-size), 1fr)',
  gap: '$2',
})

export const Step = styled('div', {
  height: '$1',
  borderRadius: '$px',
  backgroundColor: '$gray600',

  variants: {
    active: {
      true: {
        backgroundColor: '$gray100',
      },
    },
  },
})
