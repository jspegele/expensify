import React from "react"
import PropTypes from "prop-types"

const TextField = ({ error, helperText, label, type, ...restOfProps }) => {
  const id = label.toLowerCase().replace(" ", "-")

  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-semibold mb-1"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
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
  className: PropTypes.string,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
}

TextField.defaultProps = {
  error: false,
  helperText: "",
  type: "text",
}

export default TextField
