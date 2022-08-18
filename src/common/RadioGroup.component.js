import React from "react"
import PropTypes from "prop-types"

const RadioGroup = ({ currentValue, label, values, onChange }) => {
  return (
    <div>
      <label
        className="text-gray-700 font-semibold text-sm mb-2"
        htmlFor={`radio-${label}`}
      >
        {label}
      </label>
      <div className="flex flex-row items-center" id={`radio-${label}`}>
        {values.map((value) => (
          <div className="mr-4" key={value}>
            <input
              checked={value === currentValue}
              className="w-4 h-4"
              id={`${label}-${value}`}
              name="transaction-type"
              onChange={onChange}
              type="radio"
              value={value}
            />
            <label className="ml-2 text-gray-900" htmlFor={`${label}-${value}`}>
              {value}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}

RadioGroup.propTypes = {
  values: PropTypes.array,
  onChange: PropTypes.func,
}

RadioGroup.defaultProps = {}

export default RadioGroup
