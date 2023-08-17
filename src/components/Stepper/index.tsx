import React, { FunctionComponent, KeyboardEvent } from 'react'
import clsx from 'clsx'
import Step from './Step'
import { IStep, Props } from './interfaces'
import styles from './stepper.module.scss'

const Stepper: FunctionComponent<Props> = ({
  activeStep,
  disabled = false,
  className,
  steps,
  selectIndex,
  variant = 'default',
  vertical = false,
  ...rest
}) => {
  /** Styles */
  const stepperWrapperCssNames = clsx(styles['stepper-wrapper'], vertical && styles.vertical, className)

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, index: number) => {
    if (selectIndex) {
      switch (e.key) {
        case 'Enter':
          selectIndex(index)
          break
        case 'ArrowLeft': {
          const newIndex = activeStep - 1
          if (newIndex >= 0) {
            selectIndex(newIndex)
          }
          break
        }
        case 'ArrowRight': {
          const newIndex = activeStep + 1
          if (newIndex < steps.length) {
            selectIndex(newIndex)
          }
          break
        }

        default:
          break
      }
    }
  }
  return (
    <ul className={stepperWrapperCssNames} {...rest}>
      {steps.map((step: IStep, index: number) => {
        const currentOrPassed = !disabled && activeStep >= index
        const theNextActive = !disabled && activeStep + 1 === index
        return (
          <Step
            key={index}
            activeStep={!disabled && activeStep === index}
            currentOrPassed={currentOrPassed}
            handleKeyDown={handleKeyDown}
            index={index}
            selectIndex={selectIndex}
            step={step}
            theNextActive={theNextActive}
            vertical={vertical}
            variant={variant}
          />
        )
      })}
    </ul>
  )
}

export default Stepper
