import { useState, useEffect } from "react";

const EditExpense = ({ expense, onCancel, groupId }) => {
  const [expenseName, setExpenseName] = useState(expense.name);
  const [expenseAmount, setExpenseAmount] = useState(expense.amount);
  const [expenseDescription, setExpenseDescription] = useState(expense.description);
  const [expenseCategory, setExpenseCategory] = useState(expense.category);
  const [expenseDate, setExpenseDate] = useState(expense.date);

  useEffect(() => {
    setExpenseName(expense.name);
    setExpenseAmount(expense.amount);
    setExpenseDescription(expense.description);
    setExpenseCategory(expense.category);
    setExpenseDate(expense.date);
  }, [expense]);

  const handleEdit = () => {
    const groupsData = JSON.parse(localStorage.getItem("FairShare_groupsData")) || [];
    const groupIndex = groupsData.findIndex(group => group.groupId === groupId);

    if (groupIndex !== -1) {
      const expenseIndex = groupsData[groupIndex].expenses.findIndex(exp => exp.name === expense.name);
      if (expenseIndex !== -1) {
        groupsData[groupIndex].expenses[expenseIndex] = {
          ...groupsData[groupIndex].expenses[expenseIndex],
          name: expenseName,
          amount: expenseAmount,
          description: expenseDescription,
          category: expenseCategory,
          date: expenseDate,
        };
        localStorage.setItem("FairShare_groupsData", JSON.stringify(groupsData));
        onCancel();
      } else {
        console.error(`Expense not found`);
      }
    } else {
      console.error(`Group with ID ${groupId} not found`);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-beige 100vh width-full z-50">
      <div className="bg-white w-[55%] h-[90%] p-6 rounded-lg shadow-lg relative overflow-auto">
        <h3 className="text-title text-charcoal mb-4 font-bold">Edit Expense</h3>
        <button onClick={onCancel} className="bg-transparent text-charcoal absolute right-0 top-0 text-button p-4">X</button>
        <form onSubmit={handleEdit} className="py-1">
          <label htmlFor="name" className="text-charcoal">Expense Name</label>
          <input id="name" type="text" value={expenseName} onChange={(e) => setExpenseName(e.target.value)} className="shadow border rounded w-full my-2 p-1 bg-white text-charcoal" />
          <label htmlFor="amount" className="text-charcoal">Amount</label>
          <input type="number" id="amount" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} className="shadow border rounded w-full my-2 p-1 bg-white text-charcoal" />
          <label htmlFor="description" className="text-charcoal">Description</label>
          <input id="description" type="text" value={expenseDescription} onChange={(e) => setExpenseDescription(e.target.value)} className="shadow border rounded w-full my-2 p-1 bg-white text-charcoal" />
          <label htmlFor="category" className="text-charcoal">Category</label>
          <input id="category" type="text" value={expenseCategory} onChange={(e) => setExpenseCategory(e.target.value)} className="shadow border rounded w-full my-2 p-1 bg-white text-charcoal" />
          <label htmlFor="date" className="text-charcoal">Date</label>
          <input id="date" type="date" value={expenseDate} onChange={(e) => setExpenseDate(e.target.value)} className="shadow border rounded w-full my-2 p-1 bg-white text-charcoal" />
          <div className="flex justify-center mt-4">
            <button type="submit" className="bg-pink shadow text-white rounded mt-8 py-1 px-4 cursor-pointer text-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditExpense;
