import React from 'react'

type CopyIconProps = {
  iconFillColor?: string
  iconBackgroundFillColor?: string
  width?: number
  height?: number
}

const CopyIcon = ({
  iconFillColor = '#107DD4',
  iconBackgroundFillColor = '#107DD4',
  width = 12,
  height = 12
}: CopyIconProps) => (
  <svg
    enableBackground="new 0 0 12 12"
    height={height}
    viewBox="0 0 52 52"
    width={width}
    x="0px"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    y="0px"
  >
    <path
      d="M44,2H18c-2.2,0-4,1.8-4,4v2h24c2.2,0,4,1.8,4,4v28h2c2.2,0,4-1.8,4-4V6C48,3.8,46.2,2,44,2z"
      fill={iconBackgroundFillColor}
    />
    <path
      d="M38,16c0-2.2-1.8-4-4-4H8c-2.2,0-4,1.8-4,4v30c0,2.2,1.8,4,4,4h26c2.2,0,4-1.8,4-4V16z M20,23
      c0,0.6-0.4,1-1,1h-8c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h8c0.6,0,1,0.4,1,1V23z M28,39c0,0.6-0.4,1-1,1H11c-0.6,0-1-0.4-1-1v-2
      c0-0.6,0.4-1,1-1h16c0.6,0,1,0.4,1,1V39z M32,31c0,0.6-0.4,1-1,1H11c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1h20c0.6,0,1,0.4,1,1V31z"
      fill={iconFillColor}
    />
  </svg>
)

CopyIcon.defaultProps = {
  iconFillColor: '#107DD4',
  iconBackgroundFillColor: '#107DD4',
  width: 12,
  height: 12
}

export default CopyIcon
