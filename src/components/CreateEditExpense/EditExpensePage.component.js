import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { ExpensesContext } from "../../contexts/ExpensesContext"

import ExpenseForm from "./ExpenseForm.component"

const EditExpensePage = () => {
  const { id } = useParams()
  const { selectExpenseById } = useContext(ExpensesContext)
  const expense = selectExpenseById(id)

  return (
    <div>
      <h1 className="font-medium text-2xl pb-8">Edit Transaction</h1>
      <ExpenseForm expense={expense} />
    </div>
  )
}

export default EditExpensePage
