import React from 'react'

export default function DisplayGroup(props) {
  
  return (
    <div>
      <h2>{props.groupName}</h2>
      <p>{props.numGroupMembers} group members</p>
      <p>{props.groupDescription}</p>
      <p>$ Spent / {props.groupBudget}</p>
      <button>Add Expense</button>
      <button>EDIT</button>
      <button onClick={props.clearAllGroups}>DELETE</button>
    </div>
  )
}
