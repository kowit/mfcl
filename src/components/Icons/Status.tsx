import React from 'react'

type Props = {
  fillColor?: string
  height?: string | number
  width?: string | number
  overflow?: string
  [x: string]: unknown // for the rest property
}

/** NOTE: SVG created using these resources:
 - https://www.svgviewer.dev/
 - https://www.benmvp.com/blog/how-to-create-circle-svg-gradient-loading-spinner/
*/
const Status: React.FunctionComponent<Props> = ({
  height = 20,
  width = 20,
  fillColor = '#1B244D',
  overflow = 'visible',
  ...rest
}) => (
  <svg width={width} height={height} viewBox="0 0 200 200" color="#1B244D" fill="none" overflow={overflow} {...rest}>
    <defs>
      <linearGradient id="spinner-secondHalf">
        <stop offset="0%" stopOpacity={0.5} stopColor={fillColor} />
        <stop offset="100%" stopOpacity={1} stopColor={fillColor} />
      </linearGradient>
      <linearGradient id="spinner-firstHalf">
        <stop offset="0%" stopOpacity={0.5} stopColor={fillColor} />
        <stop offset="100%" stopOpacity={0} stopColor={fillColor} />
      </linearGradient>
    </defs>
    <g strokeWidth={20}>
      <path stroke="url(#spinner-secondHalf)" d="M 4 100 A 96 96 0 0 1 196 100" />
      <path stroke="url(#spinner-firstHalf)" d="M 196 100 A 96 96 0 0 1 4 100" />
    </g>
  </svg>
)

export default Status
