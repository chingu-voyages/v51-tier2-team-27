import { React, useState } from 'react'
import {v4 as uuidv4} from 'uuid'

export default function CreateGroup(props) {
  
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDescription, setNewGroupDescription] = useState('');
  const [newGroupBudget, setNewGroupBudget] = useState('');


  if (props.addGroupModalIsOpen) {

    const newGroup = {
      groupName: newGroupName,
      groupDescription: newGroupDescription,
      groupBudget: newGroupBudget,
      groupMembers: [],
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
          <input type='submit' className='bg-pink shadow rounded py-1 px-2 cursor-pointer'/>        
        </form>
      </div>
    )
  }
  
  
}
