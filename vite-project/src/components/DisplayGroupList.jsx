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
                deleteGroup={props.deleteGroup}
                />
            )
        }
    )

    if (!props.addGroupModalIsOpen) {
        return (
            <div className='relative min-w-96'>
               <h2 className='text-left text-heading  font-bold'>Groups</h2>
               <button onClick={props.openAddGroupModal} className='bg-pink text-white text-button px-4 py-1 absolute top-0 right-0 rounded-full' aria-label='create new group'>+</button> 
               <div className='flex flex-row gap-2 my-2'>         
                    {groups}  
                </div>                    
            </div>
      )
    }

    
}
