import React from "react"

import ExpenseForm from "./ExpenseForm.component"

const CreateExpensePage = () => {
  return (
    <div>
      <h1 className="font-medium text-2xl pb-8">Create Transaction</h1>
      <ExpenseForm />
    </div>
  )
}

export default CreateExpensePage
