import { useState } from "react";

const AddExpense = ({ groupId, onCancel, participants }) => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
  const [expenseDescription, setExpenseDescription] = useState("");
  const [expenseCategory, setExpenseCategory] = useState("");
  const [expenseParticipants, setExpenseParticipants] = useState(participants);
  const [expenseDate, setExpenseDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  const handleAdd = () => {
    const expenseData = {
      name: expenseName,
      amount: expenseAmount,
      description: expenseDescription,
      category: expenseCategory,
      participants: expenseParticipants,
      date: expenseDate,
    };

    const groupsData =
      JSON.parse(localStorage.getItem("FairShare_groupsData")) || [];
    const groupIndex = groupsData.findIndex(
      (group) => group.groupId === groupId
    );

    if (groupIndex !== -1) {
      if (!groupsData[groupIndex].expenses) {
        groupsData[groupIndex].expenses = [];
      }
      groupsData[groupIndex].expenses.push(expenseData);
      localStorage.setItem("FairShare_groupsData", JSON.stringify(groupsData));
      onCancel();
    } else {
      console.error(`Group with ID ${groupId} not found`);
    }

    setExpenseName("");
    setExpenseAmount("");
    setExpenseDescription("");
    setExpenseCategory("");
    setExpenseParticipants(participants);
    setExpenseDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-beige 100vh width-full z-50">
        <div className="bg-white w-[55%] h-[90%] p-6 rounded-lg shadow-lg relative overflow-auto">
          <h3 className="text-title text-charcoal mb-4 font-bold">
            Add Expense
          </h3>
          <button
            onClick={onCancel}
            className="bg-transparent text-charcoal absolute right-0 top-0 text-button p-4"
          >
            X
          </button>
          <form onSubmit={handleAdd} className="py-1">
            <label htmlFor="name" className="text-charcoal">
              Expense Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Expense Name"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
              className="shadow border rounded w-full my-2 p-1 bg-white text-charcoal"
            />
            <label htmlFor="amount" className="text-charcoal">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              placeholder="100"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
              className="shadow border rounded w-full my-2 p-1 bg-white text-charcoal"
            />
            <label htmlFor="description" className="text-charcoal">
              Description
            </label>
            <input
              id="description"
              type="text"
              placeholder="Description"
              value={expenseDescription}
              onChange={(e) => setExpenseDescription(e.target.value)}
              className="shadow border rounded w-full my-2 p-1 bg-white text-charcoal"
            />
            <label htmlFor="category" className="text-charcoal">
              Category
            </label>
            <input
              id="category"
              type="text"
              placeholder="Category"
              value={expenseCategory}
              onChange={(e) => setExpenseCategory(e.target.value)}
              className="shadow border rounded w-full my-2 p-1 bg-white text-charcoal"
            />
            <label htmlFor="participants" className="text-charcoal">
              Participants
            </label>
            <select
              id="participants"
              multiple
              value={expenseParticipants}
              onChange={(e) =>
                setExpenseParticipants(
                  [...e.target.selectedOptions].map((option) => option.value)
                )
              }
              className="shadow border rounded w-full my-2 p-1 bg-white text-charcoal"
            >
              {participants.map((participant) => (
                <option key={participant} value={participant}>
                  {participant}
                </option>
              ))}
            </select>
            <label htmlFor="date" className="text-charcoal">
              Date
            </label>
            <input
              id="date"
              type="date"
              value={expenseDate}
              onChange={(e) => setExpenseDate(e.target.value)}
              className="shadow border rounded w-full my-2 p-1 bg-white text-charcoal"
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

export default AddExpense;
