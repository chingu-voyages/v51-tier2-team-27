export default function EditGroup({
  editName,
  setEditName,
  editDescription,
  setEditDescription,
  editBudget,
  setEditBudget,
  updateGroup,
  cancelEdit,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-beige">
      <form
        className="flex flex-col gap-2 mt-2 px-10 py-10 mx-10 my-10 bg-white"
        onSubmit={(e) => {
          e.preventDefault();
          updateGroup();
        }}
      >
        <input
          className="shadow border rounded w-full my-2 p-1 bg-white text-charcoal"
          id="group-name"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
          placeholder="Group Name"
        />
        <input
          className="shadow border rounded w-full my-2 p-1 bg-white text-charcoal"
          id="group-description"
          value={editDescription}
          onChange={(e) => setEditDescription(e.target.value)}
          placeholder="Group Description"
        />
        <input
          className="shadow border rounded w-full my-2 p-1 bg-white text-charcoal"
          id="group-budget"
          type="text"
          value={editBudget}
          onChange={(e) => setEditBudget(e.target.value)}
          placeholder="Group Budget"
        />
        <div>
          <button
            className="bg-pink px-4 py-1 mt-6 text-button text-white"
            type="submit"
          >
            Save
          </button>
          <button
            className="bg-pink px-4 py-1 mt-6 text-button text-white"
            type="button"
            onClick={cancelEdit}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
