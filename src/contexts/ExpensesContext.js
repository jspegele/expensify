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

  const startSetExpenses = () => {
    const path = "users/" + uid + "/expenses/"
    return new Promise((resolve) => {
      get(ref(database, path))
        .then((snap) => {
          const dataArray = []
          if (snap.exists()) {
            for (const [key, value] of Object.entries(snap.val())) {
              dataArray.push({
                id: key,
                ...value,
              })
            }
          }
          setExpensesState(dataArray.sort((a, b) => a.date > b.date))
          resolve(true)
        })
        .catch((error) => {
          console.error(error)
          resolve([])
        })
    })
  }

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
        startSetExpenses,
        startAddExpense,
      }}
    >
      {props.children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesProvider
