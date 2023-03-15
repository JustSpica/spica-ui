import { ComponentProps } from 'react'
import { LabelStep, MultiStepStyled, Step, Steps } from '../styles/MultiStep'

export interface MultiStepProps extends ComponentProps<typeof MultiStepStyled> {
  steps: number
  currentStep?: number
}

export function MultiStep({ steps, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepStyled>
      <LabelStep>
        Passo {currentStep} de {steps}
      </LabelStep>
      <Steps css={{ '--steps-size': steps }}>
        {Array.from({ length: steps }, (_, index) => index + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepStyled>
  )
}
