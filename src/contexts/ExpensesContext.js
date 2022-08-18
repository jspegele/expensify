import React, { useState, createContext } from "react"
import { getDatabase, ref, get, set, update } from "firebase/database"

export const ExpensesContext = createContext()

const initialState = []

export const ExpensesProvider = (props) => {
  const database = getDatabase()

  const [expensesState, setExpensesState] = useState(initialState)

  const startSetExpenses = (uid) => {
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
          setExpensesState(dataArray.sort((a, b) => a.date < b.date))
          resolve(true)
        })
        .catch((error) => {
          console.error(error)
          resolve([])
        })
    })
  }

  const startAddExpense = (uid, expenseId, expense) => {
    const path = "users/" + uid + "/expenses/" + expenseId
    return new Promise((resolve) => {
      set(ref(database, path), expense).then(() => {
        const newState = [...expensesState, { id: expenseId, ...expense }].sort(
          (a, b) => a.date < b.date
        )
        setExpensesState(newState)
        resolve(true)
      })
    })
  }

  const startEditExpense = (uid, expenseId, expense) => {
    const path = "users/" + uid + "/expenses/" + expenseId

    return new Promise((resolve) => {
      update(ref(database), { [path]: expense }).then(() => {
        const newState = [
          ...expensesState.filter((expense) => expense.id !== expenseId),
          { id: expenseId, ...expense },
        ].sort((a, b) => a.date < b.date)
        setExpensesState(newState)
        resolve(true)
      })
    })
  }

  const selectAllExpenses = () => expensesState

  const selectExpenseById = (id) =>
    expensesState.filter((expense) => expense.id === id)[0]

  return (
    <ExpensesContext.Provider
      value={{
        expensesState,
        setExpensesState,
        startSetExpenses,
        startAddExpense,
        startEditExpense,
        selectAllExpenses,
        selectExpenseById,
      }}
    >
      {props.children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesProvider
