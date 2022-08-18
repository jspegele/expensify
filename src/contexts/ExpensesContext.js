import React, { useState, createContext } from "react"
import { getDatabase, ref, get, set } from "firebase/database"

export const ExpensesContext = createContext()

const initialState = []

export const ExpensesProvider = (props) => {
  const database = getDatabase()

  const [expensesState, setExpensesState] = useState(initialState)

  const startSetExpenses = (uid) => {
    const path = "users/" + uid + "/expenses/"
    console.log(path)
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
          setExpensesState(dataArray.sort((a, b) => a.date < b.date))
          resolve(true)
        })
        .catch((error) => {
          console.error(error)
          resolve([])
        })
    })
  }

  const startAddExpense = (uid, id, expense) => {
    const path = "users/" + uid + "/expenses/" + id
    return new Promise((resolve) => {
      set(ref(database, path), expense).then(() => {
        setExpensesState([...expensesState, { id, ...expense }])
        resolve(true)
      })
    })
  }

  const selectAllExpenses = () => expensesState

  return (
    <ExpensesContext.Provider
      value={{
        expensesState,
        setExpensesState,
        startSetExpenses,
        startAddExpense,
        selectAllExpenses,
      }}
    >
      {props.children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesProvider
