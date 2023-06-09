import PropTypes from 'prop-types'
import React from 'react'

import { getElementType, getUnhandledProps } from '../../lib'
import Checkbox from '../../modules/Checkbox'
import FormField from './FormField'

/**
 * Sugar for <Form.Field control={Checkbox} />.
 * @see Checkbox
 * @see Form
 */
const FormCheckbox = React.forwardRef((props, ref) => {
  const { control } = props
  const rest = getUnhandledProps(FormCheckbox, props)
  const ElementType = getElementType(FormCheckbox, props)

  return <ElementType {...rest} control={control} ref={ref} />
})

FormCheckbox.displayName = 'FormCheckbox'

FormCheckbox.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** A FormField control prop. */
  control: FormField.propTypes.control,
}

FormCheckbox.defaultProps = {
  as: FormField,
  control: Checkbox,
}

export default FormCheckbox
