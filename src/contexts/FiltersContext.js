import React, { useState, createContext } from "react"

export const FiltersContext = createContext()

const initialState = {
  sortBy: "dateDesc",
  text: "",
}

export const FiltersProvider = (props) => {
  const [filtersState, setFiltersState] = useState(initialState)

  const setSortBy = (sortBy) => setFiltersState((prevState) => ({ ...prevState, sortBy }))

  const setTextFilter = (text) =>
    setFiltersState((prevState) => ({ ...prevState, text }))

  const selectAllFilters = () => filtersState

  const selectSortBy = () => filtersState.sortBy

  const selectTextFilter = () => filtersState.text

  return (
    <FiltersContext.Provider
      value={{
        filtersState,
        setFiltersState,
        setSortBy,
        setTextFilter,
        selectAllFilters,
        selectSortBy,
        selectTextFilter,
      }}
    >
      {props.children}
    </FiltersContext.Provider>
  )
}

export default FiltersProvider
