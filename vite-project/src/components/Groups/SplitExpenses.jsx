import { useState } from "react";


const SplitExpenses = ({ groupMembers, newGroupBudget }) => {
  const [isSplit, setIsSplit] = useState(false);

  const calculateSplit = () => {
    if (groupMembers.length > 0 && newGroupBudget) {
      return (newGroupBudget / groupMembers.length).toFixed(2);
    }
    return 0;
  };

  return (
    <>
      <label htmlFor="splitExpenses" className="text-charcoal">
        Split expenses equally among group members?
      </label>
      <br />
      <input
        id="splitExpenses"
        type="checkbox"
        checked={isSplit}
        onChange={() => setIsSplit(!isSplit)}
        className="mr-2"
      />
      <br />

      {isSplit && groupMembers.length > 0 && newGroupBudget && (
        <div className="mt-4">
          <h4 className="text-base text-charcoal font-bold">
            Each member should contribute: ${calculateSplit()}
          </h4>
        </div>
      )}
    </>
  );
};

export default SplitExpenses;
