import React, { FunctionComponent, ElementType, ReactNode } from 'react'
import clsx from 'clsx'

import styles from './badge.module.scss'

interface Props {
  children: ReactNode
  /** Applies a primary or secondary style to the badge */
  type?: 'primary' | 'secondary'
  /** Overrides styles */
  className?: string
  /** Overrides wrapper DOM element */
  component?: ElementType
  [rest: string]: unknown // ...rest property
}

const Badge: FunctionComponent<Props> = ({
  className,
  children,
  type = 'primary',
  component: Component = 'span',
  ...rest
}) => {
  const badgeClassName = clsx(styles.badge, styles[type], {[styles.link]: !!(rest.href || rest.to)}, className)

  return (
    <Component className={badgeClassName} {...rest}>
      {children}
    </Component>
  )
}

export default Badge
