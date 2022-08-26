import React, { useState } from "react"
import { PropTypes } from "prop-types"
import { nanoid } from "nanoid"

import RadioGroup from "../../common/RadioGroup.component"
import TextField from "../../common/TextField.component"

const ExpenseForm = ({ expense = {}, handleExpense }) => {
  const [type, setType] = useState(expense.type || "expense")
  const [description, setDescription] = useState(expense.description || "")
  const [amount, setAmount] = useState(
    expense.amount
      ? expense.amount < 0
        ? expense.amount * -1
        : expense.amount
      : ""
  )
  const [date, setDate] = useState(expense.date || "")
  const [note, setNote] = useState(expense.note || "")
  const [tags, setTags] = useState(expense.tags || "")

  const onTypeChange = (e) => setType(e.target.value)
  const onDescriptionChange = (e) => setDescription(e.target.value)
  const onAmountChange = (e) => setAmount(e.target.value)
  const onDateChange = (e) => setDate(e.target.value)
  const onNoteChange = (e) => setNote(e.target.value)
  const onTagsChange = (e) => setTags(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    handleExpense(expense.id || nanoid(), {
      type,
      description,
      amount: type === "expense" ? parseInt(amount) * -1 : parseInt(amount),
      date: new Date(date).toString(),
      note,
      tags,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
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
          className="px-8 py-2 text-white bg-sky-700 hover:bg-sky-600 active:bg-sky-700 font-semibold rounded transition-colors justify-self-start"
          type="submit"
        >
          Save Transaction
        </button>
      </div>
    </form>
  )
}

ExpenseForm.propTypes = {
  handleExpense: PropTypes.func.isRequired,
}

export default ExpenseForm
