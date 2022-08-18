import React from "react"

import ActionsBar from "./ActionsBar.component"
import ExpensesTable from "./ExpensesTable.component"

const HomePage = () => (
  <div>
    <h1 className="font-medium text-2xl pb-8">Dashboard</h1>
    <ActionsBar />
    <ExpensesTable />
  </div>
)

export default HomePage
