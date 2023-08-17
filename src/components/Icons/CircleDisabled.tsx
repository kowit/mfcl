import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fill?: string
  stroke?: string
  [x: string]: unknown // for the rest property
}

const CircleDisabled: React.FunctionComponent<Props> = ({
  width = '24',
  height = '24',
  fill = '#E1E1E1',
  ...rest
}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
    <g>
      <path
        d="M12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_1240_15109">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
)

export default CircleDisabled
