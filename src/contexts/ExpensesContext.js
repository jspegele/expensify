import React, { useState, createContext, useContext } from "react"
import { getDatabase, ref, get, set, update } from "firebase/database"

import { FiltersContext } from "./FiltersContext"

export const ExpensesContext = createContext()

const initialState = []

export const ExpensesProvider = (props) => {
  const database = getDatabase()
  const { selectAllFilters } = useContext(FiltersContext)

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

  const selectVisibleExpenses = () => {
    const filters = selectAllFilters()

    return expensesState
      .filter((expense) => {
        const startDate = new Date(filters.startDate)
        const endDate = new Date(filters.endDate)
        const transactionDate = new Date(expense.date)

        const startDateMatch = filters.startDate ? transactionDate >= startDate ? true : false : true
        const endDateMatch = filters.endDate ? transactionDate <= endDate ? true : false : true

        const textMatch =
          expense.description.toLowerCase().includes(filters.text) ||
          expense.note.toLowerCase().includes(filters.text) ||
          expense.tags.toLowerCase().includes(filters.text)

        return startDateMatch && endDateMatch && textMatch
      })
      .sort((a, b) => {
        if (filters.sortBy === "amountDesc") return a.amount < b.amount ? 1 : -1
        if (filters.sortBy === "amountAsc") return a.amount > b.amount ? 1 : -1
        if (filters.sortBy === "dateDesc") return a.date < b.date ? 1 : -1
        if (filters.sortBy === "dateAsc") return a.date > b.date ? 1 : -1
        if (filters.sortBy === "titleDesc")
          return a.description < b.description ? 1 : -1
        if (filters.sortBy === "titleAsc")
          return a.description > b.description ? 1 : -1

        return 1
      })
  }

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
        selectVisibleExpenses,
        selectExpenseById,
      }}
    >
      {props.children}
    </ExpensesContext.Provider>
  )
}

export default ExpensesProvider
