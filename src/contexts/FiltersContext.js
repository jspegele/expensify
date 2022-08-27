import React, { useState, createContext } from "react"

export const FiltersContext = createContext()

const getCurrentYear = () => {
  const date = new Date()
  return date.getFullYear()
}

const getCurrentMonth = () => {
  const date = new Date()
  return (date.getMonth() + 1).toString().padStart(2, '0')
}

const isLeapYear = (year) => {
  if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0) ) return true
  return false
}

const getLastDayOfCurrentMonth = () => {
  const daysInFeb = isLeapYear(getCurrentYear()) ? '29' : '28'
  const daysInMonth = ['31', daysInFeb,'31','30','31','30','31','31','30','31','30','31']
  console.log(daysInMonth)
  const date = new Date()
  return daysInMonth[date.getMonth()]
}

const initialState = {
  text: "",
  startDate: `${getCurrentYear()}-${getCurrentMonth()}-01`,
  endDate: `${getCurrentYear()}-${getCurrentMonth()}-${getLastDayOfCurrentMonth()}`,
  sortBy: "dateDesc",
}

export const FiltersProvider = (props) => {
  const [filtersState, setFiltersState] = useState(initialState)

  const setTextFilter = (text) =>
    setFiltersState((prevState) => ({ ...prevState, text }))

  const setStartDate = (startDate) => setFiltersState((prevState) => ({ ...prevState, startDate }))

  const setEndDate = (endDate) => setFiltersState((prevState) => ({ ...prevState, endDate }))

  const setSortBy = (sortBy) => setFiltersState((prevState) => ({ ...prevState, sortBy }))

  const selectAllFilters = () => filtersState

  const selectTextFilter = () => filtersState.text

  const selectStartDate = () => filtersState.startDate

  const selectEndDate = () => filtersState.endDate

  const selectSortBy = () => filtersState.sortBy

  return (
    <FiltersContext.Provider
      value={{
        filtersState,
        setFiltersState,
        setTextFilter,
        setStartDate,
        setEndDate,
        setSortBy,
        selectAllFilters,
        selectTextFilter,
        selectStartDate,
        selectEndDate,
        selectSortBy,
      }}
    >
      {props.children}
    </FiltersContext.Provider>
  )
}

export default FiltersProvider
