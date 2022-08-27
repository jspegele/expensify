import React from "react"

import SearchBar from "./SearchBox.component"
import DateFilter from "./DateFilter.component"
import SortSelect from "./SortSelect.component"

const FiltersBar = () => (
  <div className="flex flex-col md:flex-row justify-between -mx-2">
    <div className="grow px-2 mb-2 md:mb-0">
      <SearchBar />
    </div>
    <div className="px-2 mb-2 md:mb-0">
      <DateFilter />
    </div>
    <div className="px-2">
      <SortSelect />
    </div>
  </div>
)

export default FiltersBar
