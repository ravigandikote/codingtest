import React from 'react'
import PropTypes from 'prop-types'
const Input = ({
  label,
  text,
  type,
  id,
  value,
  placeholder,
  handleChange,
  onInputKeyDown
}) => (
  <div className='form-group'>
    <label htmlFor={label}>{text}</label>
    <input
      type={type}
      placeholder={placeholder}
      className='form-control'
      id={id}
      value={value}
      onChange={handleChange}
      onKeyDown={onInputKeyDown}
      required
    />
  </div>
)
Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  onInputKeyDown: PropTypes.func.isRequired
}
export default Input
