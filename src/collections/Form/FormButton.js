import PropTypes from 'prop-types'
import React from 'react'

import { getElementType, getUnhandledProps } from '../../lib'
import Button from '../../elements/Button'
import FormField from './FormField'

/**
 * Sugar for <Form.Field control={Button} />.
 * @see Button
 * @see Form
 */
const FormButton = React.forwardRef((props, ref) => {
  const { control } = props
  const rest = getUnhandledProps(FormButton, props)
  const ElementType = getElementType(FormButton, props)

  return <ElementType {...rest} control={control} ref={ref} />
})

FormButton.displayName = 'FormButton'

FormButton.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A FormField control prop. */
  control: FormField.propTypes.control,
}

FormButton.defaultProps = {
  as: FormField,
  control: Button,
}

export default FormButton
