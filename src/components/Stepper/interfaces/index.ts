import { ReactNode, KeyboardEvent } from 'react'

export enum VariantType {
  DEFAULT = 'default',
  SECONDARY = 'secondary'
}

export interface Props {
  /** Index that controls the current active step */
  activeStep: number
  /** Disables all the steps */
  disabled?: boolean
  /**
   * An array of objects that can have color, icon, label, className
   * If you don't want labels, do an array of empty objects [{}, {}, {}]
   */
  steps: IStep[]
  /** className to be applied to the ul container element */
  className?: string
  /** Use this function to save the new selected index to state when clicked or arrow keyed a new step */
  selectIndex?: (index: number) => void
  /** Turns the entire stepper vertical */
  vertical?: boolean
  /** Changes the stepper's variant */
  variant?: VariantType.DEFAULT | VariantType.SECONDARY
  /** Any other props that is passed in */
  [rest: string]: unknown
}

export interface StepLabel {
  title: string | ReactNode
  titlePost?: string | ReactNode
  subtitle: string
  boldText: string[]
}

export interface IStep {
  className?: string
  color?: string
  icon?: ReactNode
  label?: string | StepLabel | ReactNode
  ariaLabel?: string
}

export interface IStepProps {
  /**
   * Controls the current active step
   */
  activeStep: boolean
  currentOrPassed: boolean
  index: number
  step: IStep
  color?: string
  /**
   * Use this function to save the selected index
   */
  selectIndex?: Function
  handleKeyDown: (e: KeyboardEvent<HTMLDivElement>, index: number) => void
  theNextActive?: boolean
  vertical?: boolean
  variant: string
}

export interface ISecondaryIcon {
  isPlaceholder: boolean
  hasSubtitle: boolean
  activeStep: boolean | undefined
}

export interface ISecondaryLabel extends ISecondaryIcon {
  title: string | ReactNode
  titlePost?: string | ReactNode
  subtitle: string
  boldText: string[]
  excludePunctuation?: boolean
  verticalClass: string
  activeStep: boolean | undefined
  isPlaceholder: boolean
  index: number
  hasSubtitle: boolean
  subtitleClassNames: string
  selectIndex: Function | undefined
}
