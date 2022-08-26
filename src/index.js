import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"

import AuthProvider from "./contexts/AuthContext"
import ExpensesProvider from "./contexts/ExpensesContext"

import App from "./App"
import "./app/firebase"
import "./index.css"
import FiltersProvider from "./contexts/FiltersContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FiltersProvider>
          <ExpensesProvider>
            <App />
          </ExpensesProvider>
        </FiltersProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
)
