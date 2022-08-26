import React, { useContext } from "react"

import { ExpensesContext } from "../../contexts/ExpensesContext"
import ExpensesTableRow from "./ExpensesTableRow.component"

const ExpensesTable = () => {
  const { selectVisibleExpenses } = useContext(ExpensesContext)
  const expenses = selectVisibleExpenses()

  return (
    <table className="table-auto sm:table-fixed w-full border border-gray-200">
      <thead>
        <tr className="border-b border-gray-200 bg-gray-100">
          <th className="sm:w-1/4 md:w-1/6 p-2 text-left text-gray-700 font-medium text-right">Date</th>
          <th className="sm:w-1/2 md:w-4/6 p-2 text-left text-gray-700 font-medium">Transaction</th>
          <th className="sm:w-1/4 md:w-1/6 p-2 text-right text-gray-700 font-medium">Amount</th>
        </tr>
      </thead>
      <tbody>
        {expenses?.length > 0 ? (
          expenses.map((expense) => <ExpensesTableRow expense={expense} key={expense.id} />)
        ) : (
          <tr className="border-b border-gray-200 hover:cursor-pointer hover:bg-gray-50">
            <td className="p-2" colSpan="3">No transactions found</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default ExpensesTable
