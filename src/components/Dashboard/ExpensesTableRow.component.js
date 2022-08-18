import React from "react"

const ExpensesTableRow = ({ expense }) => {
  const debit = expense.type === "expense"
  return (
    <tr className="border-b border-gray-200">
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
