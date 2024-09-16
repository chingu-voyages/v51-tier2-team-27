import React from 'react'
import DisplayGroup from './DisplayGroup'

export default function DisplayGroupList(props) {
    // fake data used to create display list
    // data will eventually come from top level App component
    // and will be managed retrieved from local storage
    const groupsListData = [
        {
            groupId: 1,
            groupName: "test1",
            groupDescription: "test est eatoiehtapoehgpauehg",
            groupBudget: 2000,
            numGroupMembers: 4
        },
        {
            groupId: 2,
            groupName: "test2",
            groupDescription: "test est eatoiehtapoehgpauehg",
            groupBudget: 1000,
            numGroupMembers: 3
        }
    ]

    // map over groupsList
    // render each DisplayGroup by sending props
    const groups = groupsListData.map(
        group => {
            return (
                <DisplayGroup
                groupId={group.groupId}
                groupName={group.groupName}
                groupDescription={group.groupDescription}
                groupBudget={group.groupBudget}
                numGroupMembers={group.numGroupMembers}
                />
            )
        }
    )
    


    return (
        <div>
           <h2>Groups</h2>
           <button>Add Group</button> 
           {groups}
        </div>
  )
}
