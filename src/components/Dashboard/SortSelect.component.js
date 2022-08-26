import React, { useContext } from "react"

import { FiltersContext } from "../../contexts/FiltersContext"

import SelectField from "../../common/SelectField.component"

const SortSelect = () => {
  const { setSortBy, selectSortBy } = useContext(FiltersContext)

  const sortOptions = [
    { value: "amountDesc", name: "Amount ↓" },
    { value: "amountAsc", name: "Amount ↑" },
    { value: "dateDesc", name: "Date ↓" },
    { value: "dateAsc", name: "Date ↑" },
    { value: "titleDesc", name: "Title ↓" },
    { value: "titleAsc", name: "Title ↑" },
  ]

  const onSortChange = (e) => setSortBy(e.target.value)
  return (
    <SelectField
      onChange={onSortChange}
      options={sortOptions}
      placeholder="Sort By"
      value={selectSortBy()}
    />
  )
}

export default SortSelect
