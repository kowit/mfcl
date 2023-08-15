import React, { FunctionComponent, useCallback, useState } from 'react'
import clsx from 'clsx'
import Button from '../Button'
import CopyIcon from '@site/src/components/Icons/CopyIcon'
import { copyText } from '@site/src/utils/copyText'
import styles from './CopyButton.module.scss'



type CopyButtonProps = {
  displayText: string
  textToCopy?: string
  iconOnRight?: boolean
  iconFillColor?: string | undefined
  iconBackgroundFillColor?: string | undefined
}

const CopyButton: FunctionComponent<CopyButtonProps & React.HTMLAttributes<HTMLButtonElement>> = ({
  displayText,
  textToCopy = '',
  iconOnRight = false,
  iconFillColor = undefined,
  iconBackgroundFillColor = undefined,
  ...rest
}) => {
  const [isCopied, setIsCopied] = useState(false)

  const copyOnClick = useCallback(() => {
    copyText(textToCopy || displayText).then(() => {
      setIsCopied(true)
      setTimeout(() => {
        setIsCopied(false)
      }, 1500)
    })
  }, [displayText, textToCopy])
  const { copyButton: copyButtonStyles } = styles
  const iconArgs = { iconFillColor, iconBackgroundFillColor }
  const copyButtonContent = iconOnRight ? (
    <>
      {displayText}
      <CopyIcon {...iconArgs} />
    </>
  ) : (
    <>
      <CopyIcon {...iconArgs} />
      {displayText}
    </>
  )
  return (
    <Button
      {...rest}
      btnType="link"
      size="sm"
      onKeyDown={copyOnClick}
      onClick={copyOnClick}
      className={clsx([copyButtonStyles])}
    >
      {isCopied ? 'Copied!' : copyButtonContent}
    </Button>
  )
}

CopyButton.defaultProps = {
  textToCopy: '',
  iconOnRight: false,
  iconFillColor: undefined,
  iconBackgroundFillColor: undefined
}

export default CopyButton
