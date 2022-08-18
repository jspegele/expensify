import React from "react"
import { Link } from "react-router-dom"
import ExpensesTable from "./ExpensesTable.component"

const HomePage = () => (
  <div>
    <h1>Dashboard</h1>
    <p className="mt-8">
      <Link className="underline hover:text-sky-800" to="/create">Create Expense</Link>
    </p>
    <ExpensesTable />
  </div>
)

export default HomePage
