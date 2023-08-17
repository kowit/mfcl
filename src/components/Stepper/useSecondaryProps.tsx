import { VariantType } from './interfaces'
import clsx from 'clsx'

import styles from './stepper.module.scss'

const useSecondaryProps = (
  currentOrPassed: boolean,
  ariaLabel: string | undefined,
  variant: string,
  theNextActive: boolean | undefined,
  vertical: boolean | undefined,
  color: string,
  index: number,
  hasTitle: boolean,
  hasSubtitle: boolean,
  className?: string | undefined,
  activeStep?: boolean,
  selectIndex?: Function | undefined
) => {
  const isSecondary = variant === VariantType.SECONDARY
  const isSecondaryStepActive = isSecondary && currentOrPassed && activeStep
  const isPlaceholder = hasTitle === false && hasSubtitle === false

  const currentOrPassedClass = isSecondary ? '' : currentOrPassed ? styles.passed : styles['not-passed']
  /* Custom ADA label with fallback to step-1. If ariaLabel is defined but empty, do not include the attribute. */
  const formattedAriaLabel = ariaLabel === '' ? undefined : ariaLabel || 'step-' + (index + 1)

  const activeStepClass = theNextActive && styles['next-active']
  const verticalClass = clsx(isSecondary ? styles['secondary-vertical'] : vertical && styles.vertical)
  const stepClassNames = clsx(styles['progress-step'], verticalClass, currentOrPassedClass, activeStepClass, className)
  const stepWrapperClassNames = clsx(
    isSecondary && styles[isSecondaryStepActive ? 'active-step' : 'inactive-step'],
    stepClassNames
  )
  const secondaryWrapperClassName =
    styles[isSecondary && isPlaceholder ? 'step-placeholder' : 'secondary-question-wrapper']

  const stepContainerClassNames = clsx(isSecondary ? '' : styles.circle, verticalClass)
  const subtitleClassNames = hasSubtitle ? styles['show-answer'] : styles['hide-answer']

  const getStepColor = () => {
    //Idle
    if (!activeStep && !hasSubtitle) return '#E1E1E1'
    //Active or Active w/Answer
    if (activeStep) return '#1B244D'
    //Idle w/Answer
    if (!activeStep && hasSubtitle) return '#ABBDED'
  }

  const stepColor = !isSecondary ? color : getStepColor()

  const secondaryLabelProps = {
    verticalClass,
    activeStep,
    isPlaceholder,
    index,
    hasSubtitle,
    subtitleClassNames,
    selectIndex
  }

  return {
    currentOrPassedClass,
    formattedAriaLabel,
    isSecondary,
    activeStepClass,
    stepWrapperClassNames,
    secondaryWrapperClassName,
    stepContainerClassNames,
    subtitleClassNames,
    secondaryLabelProps,
    stepColor
  }
}

export default useSecondaryProps
