import React from "react"
import { useNavigate } from "react-router-dom"

const ExpensesTableRow = ({ expense }) => {
  const navigate = useNavigate()
  const debit = expense.type === "expense"

  const handleEditExpense = () => {
    navigate("/edit/" + expense.id)
  }

  return (
    <tr className="border-b border-gray-200 hover:cursor-pointer hover:bg-gray-50" onClick={handleEditExpense}>
      <td className="p-2">{expense.date}</td>
      <td className="p-2">{expense.description}</td>
      <td className="p-2 text-right font-semibold">
        <span className={debit ? "text-red-800" : ""}>
          {`${debit ? "(" : ""}$${Number(
            expense.amount
          ).toLocaleString("en")}${debit ? ")" : ""}`}
        </span>
      </td>
    </tr>
  )
}

export default ExpensesTableRow
