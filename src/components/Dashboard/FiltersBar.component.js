import React, { useContext } from "react"

import { FiltersContext } from "../../contexts/FiltersContext"

import TextField from "../../common/TextField.component"
import SelectField from "../../common/SelectField.component"

const FiltersBar = () => {
  const { setSortBy, setTextFilter, selectSortBy, selectTextFilter,  } =
    useContext(FiltersContext)

  const sortOptions = [
    { value: "amountDesc", name: "Amount ↓" },
    { value: "amountAsc", name: "Amount ↑" },
    { value: "dateDesc", name: "Date ↓" },
    { value: "dateAsc", name: "Date ↑" },
    { value: "titleDesc", name: "Title ↓" },
    { value: "titleAsc", name: "Title ↑" },
  ]

  const onSearchChange = (e) => setTextFilter(e.target.value)

  const onSortChange = (e) => setSortBy(e.target.value)

  return (
    <div className="flex justify-between -mx-2">
      <div className="grow px-2">
        <TextField
          fullWidth
          onChange={onSearchChange}
          placeholder="Search Transactions"
          value={selectTextFilter()}
        />
      </div>
      <div className="px-2">
        <SelectField
          onChange={onSortChange}
          options={sortOptions}
          placeholder="Sort By"
          value={selectSortBy()}
        />
      </div>
    </div>
  )
}

export default FiltersBar
