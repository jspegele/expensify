import React, { useContext, useEffect } from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth"

import AppRouter from "./app/AppRouter.component"
import { AuthContext } from "./contexts/AuthContext"

const App = () => {
  const auth = getAuth()
  const { setAuthState } = useContext(AuthContext)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthState(user)
      }
    })
  }, [])

  return (
    <AppRouter />
  )
}

export default App
