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
      <div>
        <h3>New Group</h3>
        <button>X</button>
        <form onSubmit={(e) => {
        props.addGroup(e, newGroup);
        setNewGroupName("");        
        setNewGroupDescription("");
        setNewGroupBudget();
        }}>
        <label htmlFor='name'>Group Name *</label>
        <input 
        required
        id='name'
        type='text' 
        value={newGroupName}
        onChange={(e) => setNewGroupName(e.target.value)}
        placeholder='Ex: Trip to Disney!'
        /> 
        <br/>                 
        <label htmlFor='description'>Group Description *</label>          
        <textarea 
        required
        id='description'
        type='text' 
        value={newGroupDescription}
        onChange={(e) => setNewGroupDescription(e.target.value)}        
        />
        <br/>
        <label htmlFor='budget'>Group Budget</label>    
        <input
        id='budget'
        type='number'
        value={newGroupBudget}
        onChange={(e) => setNewGroupBudget(e.target.value)}
        placeholder='$' 
        />
        <br/>
        <input type='submit'/>        
        </form>
      </div>
    )
  }
  
  
}
