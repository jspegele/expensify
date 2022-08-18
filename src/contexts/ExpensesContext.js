import React, { useContext, useState, createContext } from "react"
import { getDatabase, ref, get, set } from "firebase/database"

import { AuthContext } from "./AuthContext"

export const ExpensesContext = createContext()

const initialState = []

export const ExpensesProvider = (props) => {
  const database = getDatabase()
  const { selectUid } = useContext(AuthContext)
  const uid = selectUid()

  const [expensesState, setExpensesState] = useState(initialState)

  const startAddExpense = (id, expense) => {
    const path = "users/" + uid + "/expenses/" + id
    return new Promise((resolve) => {
      set(ref(database, path), expense).then(() => {
        resolve(true)
      })
    })
  }

  return (
    <ExpensesContext.Provider
      value={{
        expensesState,
        setExpensesState,
        startAddExpense,
      }}
    >
      {props.children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesProvider
