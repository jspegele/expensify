import React, { useState, createContext } from "react"

export const FiltersContext = createContext()

const initialState = {
  text: "",
}

export const FiltersProvider = (props) => {
  const [filtersState, setFiltersState] = useState(initialState)

  const setTextFilter = (text) =>
    setFiltersState((prevState) => ({ ...prevState, text }))

  const selectTextFilter = () => filtersState.text

  return (
    <FiltersContext.Provider
      value={{
        filtersState,
        setFiltersState,
        setTextFilter,
        selectTextFilter,
      }}
    >
      {props.children}
    </FiltersContext.Provider>
  )
}

export default FiltersProvider
