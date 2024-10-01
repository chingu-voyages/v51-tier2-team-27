import React, { useState } from 'react';

export default function DisplayGroup(props) {
  const [showDetails, setShowDetails] = useState(false); // State to toggle the display

  const toggleDetails = () => {
    setShowDetails(!showDetails); // Toggle details display
  };

  return (
    <div 
      className="border shadow rounded-xl p-3 text-left relative bg-lightTeal/40 min-w-72 cursor-pointer"
      onClick={toggleDetails} // Toggle details on card click
    >
      <h3 className="text-title mb-4 font-bold">{props.groupName}</h3>
      <div className="flex flex-row absolute right-2 top-2 p-3">
        <p className="pr-1">{props.numGroupMembers}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
          role="img"
        >
          <title>number of group members</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
          />
        </svg>
      </div>
      <p className="text-para mb-2">{props.groupDescription}</p>
      <h4 className="text-charcoal font-bold mt-4">Group Budget: ${props.groupBudget}</h4>

      {/* Show group summary in white and members only when clicked */}
      {showDetails && (
        <div className="bg-white p-4 mt-4 rounded shadow-md">
          <h4 className="text-charcoal font-bold">Group ID: {props.groupId}</h4>
          <p>Group Name: {props.groupName}</p>
          <p>Group Description: {props.groupDescription}</p>
          <p>Group Allotted Budget: ${props.groupBudget}</p>

          {/* Toggle Group Members */}
          <h4 className="text-charcoal font-bold mt-4">Group Members</h4>
          <ul>
            {props.groupMembers.map((member, index) => (
              <li key={index}>
                {member}
                <button 
                  className="bg-transparent p-1 ml-2"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering the parent onClick
                    props.deleteMember(props.groupId, index);
                  }}
                >
                  {/* Add icon or text for delete button */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
