import React, { FunctionComponent, ReactNode, memo, KeyboardEvent, isValidElement } from 'react'
import clsx from 'clsx'
import { IStepProps, StepLabel } from './interfaces'
import SecondaryLabel from './SecondaryLabel'
import useSecondaryProps from './useSecondaryProps'

import styles from './stepper.module.scss'

const Step: FunctionComponent<IStepProps> = ({
  activeStep,
  currentOrPassed,
  handleKeyDown,
  step,
  index,
  selectIndex,
  theNextActive,
  vertical,
  variant
}) => {
  const { color = '#d63426', icon, label, ariaLabel, className } = step
  const isStepLabel =
    typeof label !== 'undefined' &&
    !isValidElement(label) &&
    typeof label !== 'string' &&
    typeof label !== 'number' &&
    typeof label !== 'boolean'
  const isStepLabelReactNode = !!(label as ReactNode)
  const hasSubtitle = isStepLabel && (label as StepLabel)?.subtitle !== ''
  const hasTitle = isStepLabelReactNode || (isStepLabel && (label as StepLabel)?.title !== '')

  const {
    formattedAriaLabel,
    isSecondary,
    stepWrapperClassNames,
    stepContainerClassNames,
    stepColor,
    secondaryLabelProps
  } = useSecondaryProps(
    currentOrPassed,
    ariaLabel,
    variant,
    theNextActive,
    vertical,
    color,
    index,
    hasTitle,
    hasSubtitle,
    className,
    activeStep,
    selectIndex
  )

  return (
    <li className={stepWrapperClassNames} tabIndex={selectIndex ? 0 : -1}>
      <div
        onClick={selectIndex ? () => selectIndex(index) : undefined}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => handleKeyDown(e, index)}
        role="button"
        aria-label={formattedAriaLabel}
        className={stepContainerClassNames}
        itemID={`step-${index}`}
        style={
          activeStep
            ? { border: `2px solid ${stepColor}` }
            : {
                border: `2px solid ${stepColor}`,
                cursor: selectIndex ? 'pointer' : ''
              }
        }
      >
        {icon}
      </div>
      {isStepLabel ? (
        <SecondaryLabel {...secondaryLabelProps} {...(label as StepLabel)} />
      ) : (
        label && (
          <div
            className={clsx(isSecondary && styles['secondary-label'], styles.label, secondaryLabelProps?.verticalClass)}
          >
            {label}
          </div>
        )
      )}
    </li>
  )
}

export default memo(Step)
