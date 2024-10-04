import {createSlice} from "@reduxjs/toolkit";
const getGroupsFromLocalStorage = () => {
  const groups = localStorage.getItem("groups");
  return groups ? JSON.parse(groups) : [];
};

const saveGroupsToLocalStorage = (groups) => {
  localStorage.setItem("groups", JSON.stringify(groups));
};

const expenseSlice = createSlice({
  name: "expenses",
  initialState: {
    groups: getGroupsFromLocalStorage(),
  },
  reducers: {
    addExpense: (state, action) => {
      const { groupId, name, description, category, amount, participants, date, id } = action.payload;

      const groups = getGroupsFromLocalStorage();
      
      const group = groups.find((group) => group.id === groupId);

      if (group) {
        group.expenses.push({ id, name, description, category, amount, participants, date });
        
        saveGroupsToLocalStorage(groups);
      }

      state.groups = groups;
    },
  },
});

export const { addExpense } = expenseSlice.actions;
export default expenseSlice.reducer;

