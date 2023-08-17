import React, { FunctionComponent } from 'react'
import clsx from 'clsx'
import SecondaryIcon from './SecondaryIcon'
import { ISecondaryLabel } from './interfaces'
import StyleKeywords from './StyleKeywords'
import styles from './stepper.module.scss'

const SecondaryLabel: FunctionComponent<ISecondaryLabel> = ({
  title,
  titlePost,
  subtitle,
  boldText,
  excludePunctuation = true,
  verticalClass,
  activeStep,
  isPlaceholder,
  index,
  hasSubtitle,
  subtitleClassNames,
  selectIndex
}) => {
  const secondaryWrapperClassName = styles[isPlaceholder ? 'step-placeholder' : 'secondary-question-wrapper']
  const isTitleReactNode = React.isValidElement(title)

  return (
    <div
      className={clsx(styles['secondary-label'], styles.label, verticalClass)}
      onClick={selectIndex ? () => selectIndex(index) : undefined}
      style={{
        cursor: activeStep ? '' : 'pointer'
      }}
    >
      <SecondaryIcon isPlaceholder={isPlaceholder} hasSubtitle={hasSubtitle} activeStep={activeStep} />
      <div className={secondaryWrapperClassName}>
        {!isTitleReactNode && (
          <div className={styles['step-title']}>
            <StyleKeywords title={title as string} boldText={boldText} excludePunctuation={excludePunctuation} />
            {titlePost !== null && titlePost}
          </div>
        )}
        {isTitleReactNode && (
          <div className={styles['step-title']}>
            <span>{title}</span>
            {titlePost !== null && titlePost}
          </div>
        )}
        <div className={subtitleClassNames}>{subtitle}</div>
      </div>
    </div>
  )
}

export default SecondaryLabel
