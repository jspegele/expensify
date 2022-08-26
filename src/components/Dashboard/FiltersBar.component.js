import React, { useContext } from "react"

import { FiltersContext } from "../../contexts/FiltersContext"

import TextField from "../../common/TextField.component"

const FiltersBar = () => {
  const { selectTextFilter, setTextFilter } = useContext(FiltersContext)

  const onSearchChange = e => setTextFilter(e.target.value)

  return (
    <div className="flex justify-between">
      <TextField
        fullWidth
        onChange={onSearchChange}
        placeholder="Search Transactions"
        value={selectTextFilter()}
      />
    </div>
  )
}

export default FiltersBar
