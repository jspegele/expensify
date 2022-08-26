import React from "react"
import { useNavigate } from "react-router-dom"

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const ExpensesTableRow = ({ expense }) => {
  const navigate = useNavigate()
  const debit = expense.type === "expense"

  const handleEditExpense = () => {
    navigate("/edit/" + expense.id)
  }

  const formatDate = (isoString) => {
    const date = new Date(isoString)
    return (`${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`)
  }

  return (
    <tr className="border-b border-gray-200 hover:cursor-pointer hover:bg-gray-50" onClick={handleEditExpense}>
      <td className="p-2 text-right">{formatDate(expense.date)}</td>
      <td className="p-2">{expense.description}</td>
      <td className="p-2 text-right font-semibold">
        <span className={debit ? "text-red-800" : ""}>
          {debit ? (
            `($${(Number(expense.amount) * -1).toLocaleString("en")})`
          ) : (
            `$${Number(expense.amount).toLocaleString("en")}`
          )}
        </span>
      </td>
    </tr>
  )
}

export default ExpensesTableRow
