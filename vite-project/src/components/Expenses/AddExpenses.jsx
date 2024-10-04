import {useState} from "react";
import { addExpense } from "../../slices/expenseSlice";
import { useDispatch } from "react-redux";
const AddExpense = ({ groupId}) => {
    const dispatch = useDispatch();
    const [expense, setExpense] = useState({
      name: '',
      description: '',
      category: '',
      amount: 0,
      participants: [],
      date: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setExpense({ ...expense, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addExpense({ ...expense, id: Date.now(), groupId })); 
      setExpense({ name: '', description: '', category: '', amount: 0, participants: [], date: '' });
    };
  
    return (
        <div className="border-solid border-2 border-indigo-600">
        <form onSubmit={handleSubmit}>
        <label htmlFor="ExpenseName">Expense</label>
        <input name="name" id="ExpenseName" value={expense.name} onChange={handleChange} placeholder="Expense Name" />
        <br />
        <label htmlFor="description">Description</label>
        <input name="description" id="description" value={expense.description} onChange={handleChange} placeholder="Description" />
        <br />
        <label htmlFor="category">Category</label>
        <input name="category" id="category" value={expense.category} onChange={handleChange} placeholder="Category" />
        <br />
        <label htmlFor="amount">Amount</label>
        <input name="amount" id="amount"type="number" value={expense.amount} onChange={handleChange} placeholder="Amount" />
        <br />
        <label htmlFor="participants">Participants</label>
        <input name="participants" id="participants" value={expense.participants} onChange={handleChange} placeholder="Participants (comma separated)" />
        <br />
        <label htmlFor="date">Date</label>
        <input name="date" id="date" type="date" value={expense.date} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  };

 export default AddExpense;
