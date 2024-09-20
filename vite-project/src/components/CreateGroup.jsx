import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function CreateGroup(props) {
  const [newGroupName, setNewGroupName] = useState('');
  const [newGroupDescription, setNewGroupDescription] = useState('');
  const [newGroupBudget, setNewGroupBudget] = useState('');
  const [groupMembers, setGroupMembers] = useState([]);
  const [newMember, setNewMember] = useState('');
  const [editIndex, setEditIndex] = useState(null); 
  const [editedMember, setEditedMember] = useState(''); 

  const addGroupMember = () => {
    if (newMember.trim()) {
      const updatedMembers = [...groupMembers, newMember.trim()];
      setGroupMembers(updatedMembers);
      setNewMember('');
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setEditedMember(groupMembers[index]);
  };

  const handleSave = () => {
    const updatedMembers = [...groupMembers];
    updatedMembers[editIndex] = editedMember.trim();
    setGroupMembers(updatedMembers);
    setEditIndex(null);
    setEditedMember('');
  };

  if (props.addGroupModalIsOpen) {
    const newGroup = {
      groupName: newGroupName,
      groupDescription: newGroupDescription,
      groupBudget: newGroupBudget,
      groupMembers: groupMembers,
      groupId: uuidv4(),
    };

    return (
      <div className="min-w-96 bg-white border shadow text-left relative p-4 rounded">
        <h3 className="text-title mb-4 font-bold">New Group</h3>
        <button
          onClick={() => {
            props.closeAddGroupModal();
            setNewGroupName('');
            setNewGroupDescription('');
            setNewGroupBudget('');
          }}
          className="bg-transparent absolute right-0 top-0 text-button p-4"
          aria-label="close"
        >
          X
        </button>
        <form
          onSubmit={(e) => {
            props.addGroup(e, newGroup);
            setNewGroupName('');
            setNewGroupDescription('');
            setNewGroupBudget('');
            setGroupMembers([]);
          }}
          className="py-1"
        >
          <label htmlFor="name">Group Name *</label>
          <br />
          <input
            required
            id="name"
            type="text"
            value={newGroupName}
            onChange={(e) => setNewGroupName(e.target.value)}
            placeholder="Ex: Trip to Disney!"
            className="shadow border rounded w-full my-2"
          />
          <br />
          <label htmlFor="description">Group Description *</label>
          <br />
          <input
            required
            id="description"
            type="text"
            value={newGroupDescription}
            onChange={(e) => setNewGroupDescription(e.target.value)}
            className="shadow border rounded w-full my-2"
          />
          <br />
          <label htmlFor="budget">Group Budget</label>
          <br />
          <input
            id="budget"
            type="number"
            min={0}
            step={1}
            value={newGroupBudget}
            onChange={(e) => setNewGroupBudget(e.target.value)}
            placeholder="$"
            className="shadow border rounded my-2"
          />
          <br />
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
          <br />
          <div>
          <h4>Group Members</h4>
          <ul>
            {groupMembers.map((member, index) => (
              <li key={index}>
                {editIndex === index ? (
                  <div>
                    <input
                      type="text"
                      value={editedMember}
                      onChange={(e) => setEditedMember(e.target.value)}
                    />
                    <button onClick={handleSave}>Save</button>
                  </div>
                ) : (
                  <div>
                    {member}
                    <button
                      className="bg-transparent p-1"
                      onClick={() => handleEdit(index)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                        />
                      </svg>
                    </button>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
          <input
            type="submit"
            className="bg-pink shadow text-white rounded mt-8 py-1 px-4 cursor-pointer text-button"
          />
        </form>
        
      </div>
    );
  }
}

