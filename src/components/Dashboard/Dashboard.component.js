import React from "react"

import ActionsBar from "./ActionsBar.component"
import ExpensesTable from "./ExpensesTable.component"
import FiltersBar from "./FiltersBar.component"

const HomePage = () => (
  <div>
    <h1 className="font-medium text-2xl pb-8">Dashboard</h1>
    <FiltersBar />
    <ActionsBar />
    <ExpensesTable />
  </div>
)

export default HomePage
