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
      <div className='min-w-96 bg-white border shadow text-left relative p-4 rounded'>
        <h3 className='text-title mb-4 font-bold'>New Group</h3>
        <button onClick={() => {          
          props.closeAddGroupModal();
          setNewGroupName("");        
          setNewGroupDescription("");
          setNewGroupBudget('');
           }
        } className='bg-transparent absolute right-0 top-0 text-button p-4' aria-label='close'>X</button>
        <form onSubmit={(e) => {
        props.addGroup(e, newGroup);
        setNewGroupName("");        
        setNewGroupDescription("");
        setNewGroupBudget('');
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
          min={0}
          step={1}
          value={newGroupBudget}
          onChange={(e) => setNewGroupBudget(e.target.value)}
          placeholder='$' 
          className='shadow border rounded my-2'
          />
          <br/>
          <input type='submit' className='bg-pink shadow text-white rounded mt-8 py-1 px-4 cursor-pointer text-button'/>        
        </form>
      </div>
    )
  }
  
  
}
