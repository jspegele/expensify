import React, { useContext } from "react"
import { Routes, Route, Navigate, useLocation } from "react-router-dom"

import { AuthContext } from "../contexts/AuthContext"

import SignUpLayout from "../components/Layouts/SignUpLayout.component"
import Layout from "../components/Layouts/Layout.component"
import SignUpPage from "../components/SignUpSignIn/SignUpPage.component"
import SignInPage from "../components/SignUpSignIn/SignInPage.component"
import ForgotPasswordPage from "../components/SignUpSignIn/ForgotPasswordPage.component"
import Dashboard from "../components/Dashboard/Dashboard.component"

function RequireAnon({ children }) {
  const { authState } = useContext(AuthContext)

  if (authState.uid) {
    return <Navigate to="/dashboard" />
  }

  return children
}

function RequireAuth({ children }) {
  const { authState } = useContext(AuthContext)
  const location = useLocation()

  if (!authState.uid) {
    return <Navigate to="/signin" state={{ from: location }} />
  }

  return children
}

const AppRouter = () => {
  return (
    <Routes>
      <Route
        element={
          <RequireAnon>
            <SignUpLayout />
          </RequireAnon>
        }
      >
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Route>
      <Route
        element={
          <RequireAuth>
            <Layout />
          </RequireAuth>
        }
      >
      <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
