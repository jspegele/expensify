import React, { useState, createContext } from "react"

export const FiltersContext = createContext()

const initialState = {
  text: "",
  startDate: "",
  endDate: "",
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
