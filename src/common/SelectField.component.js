import React from "react"
import PropTypes from "prop-types"

const SelectField = ({
  error,
  fullWidth,
  helperText,
  label,
  options,
  ...restOfProps
}) => {
  const id = label ? label.toLowerCase().replace(" ", "-") : ""

  return (
    <div className={fullWidth ? "w-full" : ""}>
      {label && (
        <label
          className="text-gray-700 font-semibold text-sm mb-2"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <select
        className={`border bg-white rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "focus:ring-blue-500 focus:border-blue-500"
        }`}
        id={id}
        {...restOfProps}
      >
        {options.length > 0 &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      {helperText && <div className="text-red-500 text-sm">{helperText}</div>}
    </div>
  )
}

SelectField.propTypes = {
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
}

SelectField.defaultProps = {
  error: false,
  fullWidth: false,
  helperText: "",
  label: null,
  options: [{ value: "", name: "Select One" }],
  type: "text",
}

export default SelectField
