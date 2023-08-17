import React, { FunctionComponent } from 'react'
import CheckOutlined from '../Icons/CheckOutlined'
import CircleDisabled from '../Icons/CircleDisabled'
import { ISecondaryIcon } from './interfaces'
import Status from '../Icons/Status'
import styles from './stepper.module.scss'

const SecondaryIcon: FunctionComponent<ISecondaryIcon> = ({ isPlaceholder, hasSubtitle, activeStep }) => {
  if (isPlaceholder) {
    return <div className={styles['icon-placeholder']}></div>
  }
  //Active
  if (activeStep && !hasSubtitle) {
    /** NOTE: If a loading spinner is needed, use the below commented fragment */
    // return <Loading size="sm" color="#1B244D" />
    return <Status style={{ margin: '0 3px' }} width={18} height={18} />
  }

  //Active w/answer
  if (activeStep && !isPlaceholder && hasSubtitle) {
    return <CheckOutlined fillColor="#ABBDED" stroke="#F2F5FF" />
  }

  // Idle w/answer
  if (hasSubtitle) {
    return <CheckOutlined fillColor="#ABBDED" />
  }

  //Idle
  if (!activeStep && !hasSubtitle) {
    return <CircleDisabled />
  }

  return null
}

export default SecondaryIcon
