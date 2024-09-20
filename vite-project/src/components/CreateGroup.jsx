import { React, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

export default function CreateGroup(props) {
  
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDescription, setNewGroupDescription] = useState('');
  const [newGroupBudget, setNewGroupBudget] = useState('');
  const [groupMembers, setGroupMembers] =useState([]);
  const [newMember, setNewMember] =useState("");

  const addGroupMember = () => {
    if (newMember.trim()) {
      const updatedMembers = [...groupMembers, newMember.trim()];
      setGroupMembers(updatedMembers); 
      setNewMember(''); 
    }
  };
  if (props.addGroupModalIsOpen) {

    const newGroup = {
      groupName: newGroupName,
      groupDescription: newGroupDescription,
      groupBudget: newGroupBudget,
      groupMembers:groupMembers,
      groupId: uuidv4()
    }
   
    return (
      <div className='w-96 border shadow text-left relative p-2'>
        <h3>New Group</h3>
        <button onClick={props.closeAddGroupModal} className='bg-transparent absolute right-0 top-0'>X</button>
        <form onSubmit={(e) => {
        props.addGroup(e, newGroup);
        setNewGroupName("");        
        setNewGroupDescription("");
        setNewGroupBudget();
        setGroupMembers([]);
        }}
        className='py-1'
        >
          <label htmlFor='name'>Group Name *</label>
          <br/>  
          <input 
          required
          id='name'
          type='text' 
          value={newGroupName}
          onChange={(e) => setNewGroupName(e.target.value)}
          placeholder='Ex: Trip to Disney!'
          className='shadow border rounded w-full my-2'
          /> 
          <br/>                 
          <label htmlFor='description'>Group Description *</label>  
          <br/>          
          <input
          required
          id='description'
          type='text' 
          value={newGroupDescription}
          onChange={(e) => setNewGroupDescription(e.target.value)}   
          className='shadow border rounded w-full my-2'     
          />
          <br/>
          <label htmlFor='budget'>Group Budget</label>  
          <br/>    
          <input
          id='budget'
          type='number'
          value={newGroupBudget}
          onChange={(e) => setNewGroupBudget(e.target.value)}
          placeholder='$' 
          className='shadow border rounded my-2'
          />
          <br/>
          {/* added */}
          <label htmlFor="member">Add Group Member</label>
          <input
            id="member"
            type="text"
            value={newMember}
            onChange={(e) => setNewMember(e.target.value)}
            placeholder="Enter member name"
          />
          <button type="button" onClick={addGroupMember}>
            Add Group Member
          </button> 
          <br/>          
          <input type='submit' className='bg-pink shadow rounded py-1 px-2 cursor-pointer'/>        
        </form>
        <div>
          <h4>Group Members</h4>
          <ul>
            {groupMembers.map((member, index) => (
              <li key={index}>{member}
              <button  className='bg-transparent p-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
              </svg>
              </button>
              <button className='bg-transparent p-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>
             </button>
             </li>

            ))}
          </ul>
        </div>
      </div>
    )
  }
  
}
