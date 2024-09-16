import React from 'react'

export default function DisplayGroup(props) {
  return (
    <div>
      <h2>{props.groupName}</h2>
      <p>ICON + {props.numGroupMembers}</p>
      <p>{props.groupDescription}</p>
      <p>$ Spent / {props.groupBudget}</p>
      <button>Add Expense</button>
      <p>EDIT ICON</p>
      <p>DELETE ICON</p>
    </div>
  )
}
