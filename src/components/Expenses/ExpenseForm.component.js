import React, { useState } from "react"

const ExpenseForm = () => {
  const [type, setType] = useState("")

  const onTypeChange = (e) => setType(e.target.value)

  return (
    <form>
      <div className="flex">
        <div className="flex items-center mb-4">
          <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            id="type-expense"
            name="transaction-type"
            onChange={onTypeChange}
            type="radio"
            value="expense"
          />
          <label
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            htmlFor="type-expense"
          >
            Expense
          </label>
        </div>
        <div className="flex items-center">
          <input
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            id="type-income"
            name="transaction-type"
            onChange={onTypeChange}
            type="radio"
            value="income"
          />
          <label
            className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            htmlFor="type-income"
          >
            Income
          </label>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm
