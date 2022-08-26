import React from "react"

import { Link } from "react-router-dom"

const ActionsBar = () => {
  return (
    <div className="flex items-end justify-end">
      <Link className="px-4 py-2 text-white bg-sky-700 hover:bg-sky-600 active:bg-sky-700 font-semibold rounded transition-colors" to="/create">
        + Transaction
      </Link>
    </div>
  )
}

export default ActionsBar
