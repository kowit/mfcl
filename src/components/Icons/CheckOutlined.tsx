import React from 'react'

interface Props {
  width?: string | number
  height?: string | number
  fillColor?: string
  stroke?: string
  [x: string]: unknown // for the rest property
}

const CheckOutlined: React.FunctionComponent<Props> = ({
  width = '22',
  height = '22',
  fillColor = '#ABBDED',
  stroke = 'white',
  ...rest
}) => (
  <svg width={width} height={height} viewBox="0 0 22 22" fill="none" {...rest}>
    <path
      d="M0.875 12C0.875 6.95325 4.95325 2.875 10 2.875C15.0468 2.875 19.125 6.95325 19.125 12C19.125 17.0468 15.0468 21.125 10 21.125C4.95325 21.125 0.875 17.0468 0.875 12Z"
      stroke={fillColor}
      strokeWidth="1.75"
    />
    <path
      d="M20.7774 5.77817L21.556 5.00036L20.7778 4.22219L19.2778 2.72219L18.4935 1.93785L17.7157 2.7287L8.98197 11.6094L7.1863 9.82069L6.41123 9.04862L5.63493 9.81946L4.21493 11.2295L3.43062 12.0082L4.21315 12.7888L8.21315 16.7788L8.99061 17.5543L9.76746 16.7782L20.7774 5.77817Z"
      fill={fillColor}
      stroke={stroke}
      strokeWidth="2.2"
    />
  </svg>
)

export default CheckOutlined
