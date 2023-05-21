import PropTypes from 'prop-types'
import React from 'react'
import Marq from 'react-fast-marquee'

const Marquee = React.forwardRef(function (props) {
  const { children } = props
  return <Marq {...props}>{...children}</Marq>
})

Marquee.displayName = 'Marquee'
Marquee.propTypes = {
  /** Primary content. */
  children: PropTypes.children,
}

export default Marquee
