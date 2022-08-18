import React, { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"
import { ExpensesContext } from "../../contexts/ExpensesContext"

import ExpenseForm from "./ExpenseForm.component"

const EditExpensePage = () => {
  const { id } = useParams()
  const { selectUid } = useContext(AuthContext)
  const { startEditExpense, selectExpenseById } = useContext(ExpensesContext)
  
  const navigate = useNavigate()
  const uid = selectUid()
  const expense = selectExpenseById(id)

  const handleCreateExpense = (expenseId, expense) => {
    startEditExpense(uid, expenseId, expense).then(() => navigate("/dashboard"))
  }

  return (
    <div>
      <h1 className="font-medium text-2xl pb-8">Edit Transaction</h1>
      <ExpenseForm expense={expense} handleExpense={handleCreateExpense} />
    </div>
  )
}

export default EditExpensePage
