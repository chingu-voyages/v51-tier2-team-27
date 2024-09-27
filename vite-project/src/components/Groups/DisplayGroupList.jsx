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
                editGroup={props.editGroup}
                />
            )
        }
    )

    if (!props.addGroupModalIsOpen && props.navSelect === 'groups') {
        return (
            <div className='min-w-full flex flex-col p-4'>
                <div className='flex flex-row justify-start gap-12 items-center' >
                    <h2 className='text-left text-heading  font-bold'>Groups</h2>
                    <button onClick={props.openAddGroupModal} className='bg-pink text-white text-button rounded px-2 h-10 pt-[1px]'>Add New Group</button> 
                </div>
                <div className='flex flex-row gap-2 my-4'>         
                    {groups}  
                </div>    
                               
            </div>
      )
    }

    
}
