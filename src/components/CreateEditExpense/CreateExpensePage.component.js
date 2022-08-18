import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"

import { AuthContext } from "../../contexts/AuthContext"
import { ExpensesContext } from "../../contexts/ExpensesContext"

import ExpenseForm from "./ExpenseForm.component"

const CreateExpensePage = () => {
  const { selectUid } = useContext(AuthContext)
  const { startAddExpense } = useContext(ExpensesContext)

  const navigate = useNavigate()
  const uid = selectUid()

  const handleCreateExpense = (expenseId, expense) => {
    startAddExpense(uid, expenseId, expense).then(() => navigate("/dashboard"))
  }

  return (
    <div>
      <h1 className="font-medium text-2xl pb-8">Create Transaction</h1>
      <ExpenseForm handleExpense={handleCreateExpense} />
    </div>
  )
}

export default CreateExpensePage
