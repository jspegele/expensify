import React from "react"
import PropTypes from "prop-types"

const TextField = ({ error, fullWidth, helperText, label, type, ...restOfProps }) => {
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
      <input
        className={`appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          error
            ? "border-red-500 focus:ring-red-500 focus:border-red-500"
            : "focus:ring-blue-500 focus:border-blue-500"
        }`}
        id={id}
        type={type}
        {...restOfProps}
      />
      {helperText && (
        <div className="text-red-500 text-sm">
          {helperText}
        </div>
      )}
    </div>
  )
}

TextField.propTypes = {
  error: PropTypes.bool,
  fullWidth: PropTypes.bool,
  helperText: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}

TextField.defaultProps = {
  error: false,
  fullWidth: false,
  helperText: "",
  label: null,
  type: "text",
}

export default TextField
