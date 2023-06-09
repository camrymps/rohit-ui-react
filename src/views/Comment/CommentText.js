import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import { childrenUtils, customPropTypes, getElementType, getUnhandledProps } from '../../lib'

/**
 * A comment can contain text.
 */
const CommentText = React.forwardRef(function (props, ref) {
  const { className, children, content } = props
  const classes = cx(className, 'text')
  const rest = getUnhandledProps(CommentText, props)
  const ElementType = getElementType(CommentText, props)

  return (
    <ElementType {...rest} className={classes} ref={ref}>
      {childrenUtils.isNil(children) ? content : children}
    </ElementType>
  )
})

CommentText.displayName = 'CommentText'
CommentText.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Shorthand for primary content. */
  content: customPropTypes.contentShorthand,
}

export default CommentText
