import React from 'react'
import DisplayGroup from './DisplayGroup'

export default function DisplayGroupList(props) {

    const groups = props.groupsData.map(
        group => {
            return (
                <DisplayGroup
                groupId={group.groupId}
                groupName={group.groupName}
                groupDescription={group.groupDescription}
                groupBudget={group.groupBudget}
                numGroupMembers={group.groupMembers.length}
                key={group.groupId}
                />
            )
        }
    )

    return (
        <div className='container flex flex-col'>
           <h2>Groups</h2>
           <button onClick={props.openAddGroupModal}>Add Group</button> 
           <div className="flex flex-row">
            {groups}
           </div>           
        </div>
  )
}
