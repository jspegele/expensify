import React from "react"

import SearchBar from "./SearchBox.component"
import DateFilter from "./DateFilter.component"
import SortSelect from "./SortSelect.component"

const FiltersBar = () => (
  <div className="flex justify-between -mx-2">
    <div className="grow px-2">
      <SearchBar />
    </div>
    <div className="px-2">
      <DateFilter />
    </div>
    <div className="px-2">
      <SortSelect />
    </div>
  </div>
)

export default FiltersBar
