import React from "react"

import ActionsBar from "./ActionsBar.component"
import ExpensesTable from "./ExpensesTable.component"
import FiltersBar from "./FiltersBar.component"

const DashboardPage = () => (
  <div>
    <h1 className="font-medium text-2xl pb-8">Dashboard</h1>
    <div>
      <ActionsBar />
    </div>
    <div className="mt-8">
      <FiltersBar />
    </div>
    <div className="mt-4">
      <ExpensesTable />
    </div>
  </div>
)

export default DashboardPage
