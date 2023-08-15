/* eslint-disable @typescript-eslint/ban-ts-ignore */
import React, { useState, ReactNode, useEffect } from 'react'
import Transition from 'react-transition-group/Transition'

import styles from './collapse.module.scss'

interface ChildProps {
  [props: string]: unknown
}

export interface Props {
  isOpen: boolean
  children?: ReactNode | string
  appear?: boolean
  enter?: boolean
  exit?: boolean
  className?: string
  id?: string
  timeout?: number
  childProps?: ChildProps
  onEntering?: Function
  onEntered?: Function
  onExit?: Function
  onExiting?: Function
  onExited?: Function
  showTeaser?: boolean
  teaserLength?: number
  [rest: string]: unknown
}

const transitionStatusToClassHash = {
  entering: 'collapsing',
  entered: 'show',
  exiting: 'collapsing',
  exited: 'collapse',
  unmounted: 'collapse'
}

const noop = () => {}

const Collapse: React.FunctionComponent<Props> = ({
  children = null,
  className = '',
  isOpen = false,
  appear = false,
  enter = true,
  exit = true,
  childProps,
  id = '',
  timeout = 350,
  onEntering = noop,
  onEntered = noop,
  onExit = noop,
  onExiting = noop,
  onExited = noop,
  showTeaser = false,
  teaserLength = 85,
  ...rest
}) => {
  const [height, setHeight] = useState<number | undefined>(undefined)
  const [content, setContent] = useState('')
  const [itemContentPreview, setItemContentPreview] = useState('')
  useEffect(() => {
    // ReactNode not supported while using teaser text
    if (showTeaser && typeof children === 'string') {
      setContent(children as string)
      const firstPart = content.slice(0, teaserLength)
      const splitIndex = firstPart.lastIndexOf(' ')
      setItemContentPreview(`${content.slice(0, splitIndex)}...`)
    }
  }, [children, content, showTeaser, teaserLength])

  const [shownContent, setShownContent] = useState<string>(content)
  // split the content on a full word before the 45th character (first line)

  useEffect(() => {
    if (showTeaser) {
      setHeight(13)
      setShownContent(itemContentPreview)
    }
  }, [showTeaser, itemContentPreview])

  const handleEntering = (node: any, isAppearing: any) => {
    setShownContent(content)
    setTimeout(() => {
      setHeight(node.scrollHeight)
      onEntering(node, isAppearing)
    }, 50)
  }

  const handleEntered = (node: any, isAppearing: any) => {
    setHeight(undefined)
    onEntered(node, isAppearing)
  }

  const handleExit = (node: any) => {
    setHeight(node.scrollHeight)
    onExit(node)
  }

  const handleExiting = (node: any) => {
    // NOTE: getting this variable triggers a reflow
    const unused = node.offsetHeight-12 // eslint-disable-line
    if (showTeaser) {
      setHeight(13)
      onEntering(node)
    } else {
      setHeight(0)
      onExiting(node)
    }
  }

  const handleExited = (node: any) => {
    if (showTeaser) {
      setHeight(13)
      onEntered(node)
      setShownContent(itemContentPreview)
    } else {
      setHeight(undefined)
      onExited(node)
    }
  }

  return (
    <Transition
      {...rest}
      appear={appear}
      enter={enter}
      exit={exit}
      timeout={timeout}
      in={isOpen}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
      onExited={handleExited}
    >
      {(status) => {
        const collapseClass = transitionStatusToClassHash[status] || 'collapse'
        let classes = `${styles[collapseClass]} ${className || ''}`.trim()
        if (showTeaser && status === 'exited') {
          classes = `collapseTeaser ${className || ''}`.trim()
        }
        let style = height === undefined ? {} : { height }

        if (childProps && childProps.style) {
          style = { ...(childProps.style as {}), ...style }
        }
        return (
          <div {...childProps} style={style} className={classes} id={id}>
            {showTeaser ? shownContent : children}
          </div>
        )
      }}
    </Transition>
  )
}

export default Collapse
