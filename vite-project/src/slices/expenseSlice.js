import {createSlice} from "@reduxjs/toolkit"
const expensesSlice = createSlice({
    name: "expenses",
    initialState:{
        expenses: 
        localStorage.getItem("expenses") 
        ? (JSON.parse(localStorage.getItem('expenses'))) 
        : [],
    },
    reducers: {
        addExpense: (state, action) => {
            state.expenses.push(action.payload);
            localStorage.setItem("expenses",JSON.stringify(state.expenses))
        }
    }

})
export const {addExpense} = expensesSlice.actions;
export default expensesSlice.reducer;