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
                clearAllGroups={props.clearAllGroups}
                />
            )
        }
    )

    return (
        <div>
           <h2>Groups</h2>
           <button onClick={props.openAddGroupModal} className='bg-pink'>Add Group</button> 
           <div className='flex flex-row gap-2 my-2'>         
                {groups}  
            </div>                    
        </div>
  )
}
