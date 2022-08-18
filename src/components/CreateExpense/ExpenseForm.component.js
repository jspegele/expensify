import React, { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { nanoid } from "nanoid"

import { AuthContext } from "../../contexts/AuthContext"
import { ExpensesContext } from "../../contexts/ExpensesContext"

import RadioGroup from "../../common/RadioGroup.component"
import TextField from "../../common/TextField.component"

const ExpenseForm = () => {
  const navigate = useNavigate()
  const { startAddExpense } = useContext(ExpensesContext)
  const { selectUid } = useContext(AuthContext)
  const uid = selectUid()

  const [type, setType] = useState("expense")
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")
  const [note, setNote] = useState("")
  const [tags, setTags] = useState("")

  const onTypeChange = (e) => setType(e.target.value)
  const onDescriptionChange = (e) => setDescription(e.target.value)
  const onAmountChange = (e) => setAmount(e.target.value)
  const onDateChange = (e) => setDate(e.target.value)
  const onNoteChange = (e) => setNote(e.target.value)
  const onTagsChange = (e) => setTags(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    startAddExpense(uid, nanoid(), {
      type,
      description,
      amount: parseInt(amount),
      date,
      note,
      tags,
    }).then(() => navigate("/dashboard"))
  }

  return (
    <form className="max-w-3xl" onSubmit={handleSubmit}>
      <div className="grid gap-4">
        <RadioGroup
          currentValue={type}
          label="Type"
          onChange={onTypeChange}
          values={["expense", "income"]}
        />
        <TextField
          label="Description"
          onChange={onDescriptionChange}
          value={description}
        />
        <TextField
          label="Amount"
          onChange={onAmountChange}
          type="number"
          value={amount}
        />
        <TextField
          label="Date"
          onChange={onDateChange}
          type="date"
          value={date}
        />
        <TextField label="Note" onChange={onNoteChange} value={note} />
        <TextField label="Tags" onChange={onTagsChange} value={tags} />
        <button
          className="px-8 py-2 text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-600 font-semibold rounded transition-colors justify-self-start"
          type="submit"
        >
          Save Transaction
        </button>
      </div>
    </form>
  )
}

export default ExpenseForm
