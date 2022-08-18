import React, { useContext, useEffect, useState } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"

import AppRouter from "./app/AppRouter.component"
import { AuthContext } from "./contexts/AuthContext"
import { ExpensesContext } from "./contexts/ExpensesContext"

const App = () => {
  const auth = getAuth()
  const { setAuthState } = useContext(AuthContext)
  const { startSetExpenses } = useContext(ExpensesContext)
  const [renderApp, setRenderApp] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthState(user)
        startSetExpenses(user.uid).then(() => {
          setRenderApp(true)
        })
      } else {
        setRenderApp(true)
      }
    })
  }, [])

  return (
    <React.Fragment>
      {renderApp ? (
        <AppRouter />
      ) : (
        <div className="min-h-screen flex items-center justify-center">Loading...</div>
      )}
    </React.Fragment>
  )
}

export default App
