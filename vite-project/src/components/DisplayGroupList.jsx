import React from 'react'
import DisplayGroup from './DisplayGroup'

export default function DisplayGroupList(props) {
    const deleteMember = (groupId, memberIndex) => {
        const updatedGroups = props.groupsData.map(group => {
            if (group.groupId === groupId) {
                const updatedMembers = group.groupMembers.filter((_, i) => i !== memberIndex);
                return { ...group, groupMembers: updatedMembers };
            }
            return group;
        });
        props.setGroupsData(updatedGroups); 
    };
    const groups = props.groupsData.map(
        group => {
            return (
                <DisplayGroup
                groupId={group.groupId}
                groupName={group.groupName}
                groupDescription={group.groupDescription}
                groupBudget={group.groupBudget}
                groupMembers={group.groupMembers}
                numGroupMembers={group.groupMembers.length}
                key={group.groupId}
                deleteGroup={props.deleteGroup}
                deleteMember={deleteMember}
                />
            )
        }
    )

    return (
        <div>
           <h2 className='text-left'>Groups</h2>
           <button onClick={props.openAddGroupModal} className='bg-pink px-2 py-1'>Add Group</button> 
           <div className='flex flex-row gap-2 my-2'>         
                {groups}  
            </div>                    
        </div>
  )
}
