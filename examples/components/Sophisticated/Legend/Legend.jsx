import React from 'react'
import PropTypes from 'prop-types'

import style from './Legend.style'

// "M 400 400 L200 200 L0 200"

const Legend = ({
  className,
  path,
  align,
  x,
  y,
  label,
  subLabel,
}) => (
  <g className={`${style.Legend} ${className}`}>
    <path
      d={path}
      className={style.arrow}
    />
    <text
      className={style.label}
      x={x}
      y={y}
      textAnchor={align}
    >
      {label}
    </text>
    {subLabel ? subLabel.split(/\\n/g).map((line, index) => (
      <text
        key={line}
        className={style.subLabel}
        x={x}
        y={y + 70 * (1 + index)}
        textAnchor={align}
      >
        {line}
      </text>
    )) : null}
    {/*
    <text
      className={style.sublabel}
      x="-20"
      y="290"
      textAnchor="end"
    >
      polyavent & adaptable
    </text> */}
  </g>
)

Legend.propTypes = {
  className: PropTypes.string,
  path: PropTypes.string.isRequired,
  align: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  subLabel: PropTypes.string,
}

Legend.defaultProps = {
  className: '',
  subLabel: '',
}

export default Legend
