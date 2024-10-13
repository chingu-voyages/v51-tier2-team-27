import React, { useState } from "react";

export default function EditExpense({ expense, onSave, onCancel }) {
  const [editedExpense, setEditedExpense] = useState({ ...expense });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedExpense((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    onSave(editedExpense);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-beige 100vh width-full z-50">
      <div className="bg-white w-[40%] h-auto p-6 rounded-lg shadow-lg relative overflow-auto">
        <h3 className="text-title text-charcoal mb-4 font-bold">
          Edit Expense
        </h3>
        <button
          onClick={onCancel}
          className="bg-transparent text-charcoal absolute right-0 top-0 text-button p-4"
          aria-label="close"
        >
          X
        </button>

        <div className="py-1">
          <label className="block text-charcoal font-bold mb-2">Name</label>
          <input
            type="text"
            name="expenseName"
            value={editedExpense.expenseName}
            onChange={handleChange}
            className="w-full p-2 mb-4 border"
          />
          

          <label className="block text-charcoal font-bold mb-2">Date</label>
          <input
            type="text"
            name="date"
            value={editedExpense.date}
            onChange={handleChange}
            className="w-full p-2 mb-4 border"
          />

          <label className="block text-charcoal font-bold mb-2">Amount</label>
          <input
            type="number"
            name="Amount"
            value={editedExpense.Amount}
            onChange={handleChange}
            className="w-full p-2 mb-4 border"
          />

          <label className="block text-charcoal font-bold mb-2">
            Participants
          </label>
          <input
            type="text"
            name="participants"
            value={editedExpense.participants.join(", ")}
            onChange={(e) => {
              const participantsArray = e.target.value
                .split(",")
                .map((p) => p.trim());
              setEditedExpense((prev) => ({
                ...prev,
                participants: participantsArray,
              }));
            }}
            className="w-full p-2 mb-4 border"
          />

          <div className="flex justify-center mt-4">
            <button
              onClick={handleSave}
              className="bg-pink shadow text-white rounded py-1 px-4 cursor-pointer text-button"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
