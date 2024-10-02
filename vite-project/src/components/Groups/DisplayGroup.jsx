import { useState, useEffect } from 'react';

export default function DisplayGroup(props) {
  // Original state variables
  const id = props.groupId;
  const [groupName, setGroupName] = useState(props.groupName);
  const [groupDescription, setGroupDescription] = useState(props.groupDescription);
  const [groupBudget, setGroupBudget] = useState(props.groupBudget);

  // Temporary state variables for editing
  const [editName, setEditName] = useState(props.groupName);
  const [editDescription, setEditDescription] = useState(props.groupDescription);
  const [editBudget, setEditBudget] = useState(props.groupBudget);
  const [isEditing, setIsEditing] = useState(false);

  // Sync temporary editing state with props if they change
  useEffect(() => {
    setGroupName(props.groupName);
    setGroupDescription(props.groupDescription);
    setGroupBudget(props.groupBudget);
    setEditName(props.groupName);
    setEditDescription(props.groupDescription);
    setEditBudget(props.groupBudget);
  }, [props.groupName, props.groupDescription, props.groupBudget]);

  const updateGroup = () => {
    // Update original state with edited values
    setGroupName(editName);
    setGroupDescription(editDescription);
    setGroupBudget(parseFloat(editBudget)); // Ensure budget is a number
    setIsEditing(false);
  };

  const cancelEdit = () => {
    // Reset the edit state back to the original values
    setEditName(groupName);
    setEditDescription(groupDescription);
    setEditBudget(groupBudget);
    setIsEditing(false);
  };

  return (
    <div className='border shadow rounded-xl p-3 text-left relative bg-lightTeal/40 min-w-72'>
      <h3 className='text-title mb-4 font-bold'>{groupName}</h3>
      <div className='flex flex-row absolute right-2 top-2'>
        <p className='pr-1'>{props.numGroupMembers}</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" role='img'>
          <title>number of group members</title>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
      </div>
      <p className='text-para mb-2'>{groupDescription}</p>
      <p className='text-para'>$ Spent / {groupBudget}</p>
      <button className='bg-pink px-4 py-1 mt-6 text-button text-white'>Add Expense</button>
      {isEditing ? (
        
        <form
        className='flex flex-col gap-2 mt-2'
        
          onSubmit={(e) => {
            e.preventDefault();
            updateGroup();
          }}
        >
        
        
          <input
          className="bg-lightTeal/40 border border-lightTeal/20 rounded-md w-auto"
            id="group-name"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            placeholder="Group Name"
          />
          <input
          className="bg-lightTeal/40 border border-lightTeal/20 rounded-md w-auto"
            id="group-description"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
            placeholder="Group Description"
          />
          <input
            className="bg-lightTeal/40 border border-lightTeal/20 rounded-md w-auto"
            id="group-budget"
            type="text"
            value={editBudget}
            onChange={(e) => setEditBudget(e.target.value)}
            placeholder="Group Budget"
          />
          <div>
          <button className="bg-pink px-4 py-1 mt-6 text-button text-white" type="submit">Save</button>
          <button className="bg-pink px-4 py-1 mt-6 text-button text-white" type="button" onClick={cancelEdit}>Cancel</button>
          </div>
          
        </form>
        
      ) : (
        <button className='bg-transparent p-1 absolute bottom-1 right-10' onClick={() => setIsEditing(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" role='img'>
            <title>edit group</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
          </svg>
        </button>
        
      )}

      <button onClick={() => props.deleteGroup(id)} className='bg-transparent p-1 absolute bottom-1 right-1'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" role='img'>
          <title>delete group</title>
          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>
      </button>
    </div>
  );
}