import React from "react";
import DisplayGroup from "./DisplayGroup";
import { addExpense } from "../../slices/expenseSlice";

export default function DisplayGroupList(props) {
  const deleteMember = (groupId, memberIndex) => {
    const updatedGroups = props.groupsData.map((group) => {
      if (group.groupId === groupId) {
        const updatedMembers = group.groupMembers.filter(
          (_, i) => i !== memberIndex
        );
        return { ...group, groupMembers: updatedMembers };
      }
      return group;
    });
    props.setGroupsData(updatedGroups);
  };
  const groups = props.groupsData.map((group) => {
    return (
      <DisplayGroup
        groupId={group.groupId}
        groupName={group.groupName}
        groupDescription={group.groupDescription}
        groupBudget={group.groupBudget}
        groupMembers={group.groupMembers}
        numGroupMembers={group.groupMembers.length}
        key={group.groupId}
        deleteGroup={props.deleteGroup}
        deleteMember={deleteMember}
        addExpenseModal={props.addExpenseModal}
      />
    );
  });

  if (!props.addGroupModalIsOpen && props.navSelect === "groups") {
    return (
      <div className="min-w-full flex flex-col p-4">
        <div className="flex flex-row justify-start gap-8 items-center">
          <h2 className="text-left text-heading  font-bold">Groups</h2>
          <button
            onClick={props.openAddGroupModal}
            className="bg-pink text-white text-button rounded px-3 py-2"
          >
            Add New Group
          </button>
        </div>
        <div className="flex flex-wrap gap-4 my-4">
          {groups.map((group, index) => (
            <div
              key={index}
              className=" transform transition-transform duration-200 hover:scale-105"
            >
              {group}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
