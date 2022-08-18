import React, { useContext } from "react"

import { ExpensesContext } from "../../contexts/ExpensesContext"
import ExpensesTableRow from "./ExpensesTableRow.component"

const ExpensesTable = () => {
  const { selectAllExpenses } = useContext(ExpensesContext)
  const expenses = selectAllExpenses()

  return (
    <table className="table-auto w-full border border-gray-200 mt-8">
      <thead>
        <tr className="border-b border-gray-200 bg-gray-100">
          <th className="p-2 text-left text-gray-700 font-medium">Date</th>
          <th className="p-2 text-left text-gray-700 font-medium">Transaction</th>
          <th className="p-2 text-right text-gray-700 font-medium">Amount</th>
        </tr>
      </thead>
      <tbody>
        {expenses?.length > 0 &&
          expenses.map((expense) => <ExpensesTableRow expense={expense} key={expense.id} />)}
      </tbody>
    </table>
  )
}

export default ExpensesTable
