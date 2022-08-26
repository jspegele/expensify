import React, { useContext } from "react"

import { FiltersContext } from "../../contexts/FiltersContext"

import TextField from "../../common/TextField.component"

const SearchBar = () => {
  const { setTextFilter, selectTextFilter } = useContext(FiltersContext)

  const onSearchChange = (e) => setTextFilter(e.target.value)

  return (
    <TextField
      fullWidth
      onChange={onSearchChange}
      placeholder="Search Transactions"
      value={selectTextFilter()}
    />
  )
}

export default SearchBar
