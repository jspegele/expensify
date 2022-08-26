import React, { useContext } from "react"

import { FiltersContext } from "../../contexts/FiltersContext"

import TextField from "../../common/TextField.component"

const DateFilter = () => {
  const { setStartDate, setEndDate, selectStartDate, selectEndDate } =
    useContext(FiltersContext)

  const onStartDateChange = (e) => setStartDate(e.target.value)
  const onEndDateChange = (e) => setEndDate(e.target.value)

  return (
    <div className="flex border rounded">
      <TextField
        className="appearance-none w-full p-3 text-gray-700 leading-tight min-w-[150px] focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
        onChange={onStartDateChange}
        type="date"
        value={selectStartDate()}
      />
      <span className="text-xl mt-2">&rarr;</span>
      <TextField
        className="appearance-none w-full p-3 text-gray-700 leading-tight min-w-[150px] focus:outline-none focus:shadow-outline focus:ring-blue-500 focus:border-blue-500"
        onChange={onEndDateChange}
        style={{ minWidth: "150px" }}
        type="date"
        value={selectEndDate()}
      />
    </div>
  )
}

export default DateFilter
