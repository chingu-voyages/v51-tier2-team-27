import React, { useState } from "react";

const EditGroup = ({
  groupName,
  groupDescription,
  groupBudget,
  onEdit,
  onCancel,
}) => {
  const [name, setName] = useState(groupName);
  const [description, setDescription] = useState(groupDescription);
  const [budget, setBudget] = useState(groupBudget);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEdit(name, description, budget);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-beige 100vh width-full">
        <div className="bg-white w-[55%] h-[60%] p-6 rounded-lg shadow-lg relative overflow-auto">
          <h3 className="text-title text-charcoal mb-4 font-bold">
            Edit Group
          </h3>
          <button
            onClick={() => {
              setName(groupName);
              setDescription(groupDescription);
              setBudget(groupBudget);
              onCancel();
            }}
            className="bg-transparent text-charcoal absolute right-0 top-0 text-button p-4"
            aria-label="close"
          >
            X
          </button>
          <form onSubmit={handleSubmit} className="py-1">
            <label htmlFor="name" className="text-charcoal">
              Group Name
            </label>
            <input
              className="shadow border rounded w-full my-2 p-1 bg-white text-charcoal"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Group Name"
            />
            <label htmlFor="description" className="text-charcoal">
              Description
            </label>
            <textarea
              className="shadow border rounded w-full mt-1 p-1 bg-white text-charcoal row-span-3"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Group Description"
              style={{
                overflow: "hidden",
                resize: "none",
              }}
            />
            <label htmlFor="budget" className="text-charcoal">
              Group Budget
            </label>
            <input
              className="shadow border rounded w-full mt-1 p-1 bg-white text-charcoal"
              type="number"
              id="budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Group Budget"
            />
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="bg-pink shadow text-white rounded mt-8 py-1 px-4 cursor-pointer text-button"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditGroup;
