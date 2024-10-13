import React, { useEffect, useState } from "react";
import EditExpense from "../Expenses/EditExpense";

const getGroupsData = () =>
  JSON.parse(localStorage.getItem("FairShare_groupsData")) || [];

export default function GroupDetails({ groupId, onCancel }) {
  const [groupData, setGroupData] = useState(null);
  const [selectedExpense, setSelectedExpense] = useState();

  useEffect(() => {
    const groupsData = getGroupsData();
    const group = groupsData.find((g) => g.groupId === groupId);
    setGroupData(group);
  }, [groupId]);

  const saveGroupData = (updatedGroupData) => {
    const groupsData = getGroupsData();
    const updatedGroups = groupsData.map((g) =>
      g.groupId === updatedGroupData.groupId ? updatedGroupData : g
    );
    localStorage.setItem("FairShare_groupsData", JSON.stringify(updatedGroups));
    setGroupData(updatedGroupData);
  };

  const handleSaveExpense = (updatedExpense) => {
    const updatedExpenses = groupData.expenses.map((expense) =>
      expense.expenseName === updatedExpense.expenseName
        ? updatedExpense
        : expense
    );
    const updatedGroupData = { ...groupData, expenses: updatedExpenses };
    saveGroupData(updatedGroupData);
    setSelectedExpense(null);
  };

  if (!groupData) {
    return <p>Loading group details...</p>;
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-beige 100vh width-full z-55">
        <div className="bg-white w-[55%] h-[60%] p-6 rounded-lg shadow-lg relative overflow-auto">
          <h3 className="text-title text-charcoal mb-4 font-bold">
            Group Details
          </h3>
          <button
            onClick={onCancel}
            className="bg-transparent text-charcoal absolute right-0 top-0 text-button p-4"
            aria-label="close"
          >
            X
          </button>

          <div className="py-1">
            <p>
              <span className="text-charcoal font-bold">
                {groupData.groupName}
              </span>
            </p>
            <p>
              <span className="text-charcoal font-bold">
                {groupData.groupDescription}
              </span>
            </p>
            <p>
              <span className="text-charcoal font-bold">
                ${groupData.groupBudget}
              </span>
            </p>

            <h4 className="text-charcoal font-bold mt-4">Members</h4>
            <ul>
              {groupData.groupMembers.map((member, index) => (
                <li className="text-charcoal font-bold" key={index}>
                  {member}
                </li>
              ))}
            </ul>

            <h4 className="text-charcoal font-bold mt-4">Expenses</h4>
            {groupData.expenses && groupData.expenses.length > 0 ? (
              <ul>
                {groupData.expenses.map((expense, index) => (
                  <li
                    className="text-charcoal cursor-pointer mb-2 p-2 border-b"
                    key={index}
                    onClick={() => {
                      console.log("Selected Expense: ", expense);
                      setSelectedExpense(expense);
                    }}
                  >
                    <div>
                      <p>
                        <strong>Name:</strong> {expense.expenseName}
                      </p>
                      <p>
                        <strong>Date:</strong> {expense.date}
                      </p>
                      <p>
                        <strong>Amount:</strong> ${expense.Amount}
                      </p>
                      <p>
                        <strong>Participants:</strong>{" "}
                        {expense.participants.join(", ")}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No expenses have been added to this group yet.</p>
            )}

            <div className="flex justify-center mt-4">
              <button
                onClick={onCancel}
                className="bg-pink shadow text-white rounded mt-8 py-1 px-4 cursor-pointer text-button"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedExpense && (
        <EditExpense
          expense={selectedExpense}
          onSave={handleSaveExpense}
          onCancel={() => setSelectedExpense(null)}
        />
      )}
    </>
  );
}
