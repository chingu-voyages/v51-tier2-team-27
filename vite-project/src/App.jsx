import { useState, useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import CreateGroup from "./components/Groups/CreateGroup";
import DisplayGroupList from "./components/Groups/DisplayGroupList";
import DashboardStyling from "./components/DashboardStyling";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import DisplayExpensesList from "./components/Expenses/DisplayExpensesList";
import DisplayAnalyticsList from "./components/Analytics/DisplayAnalyticsList";

function App() {
  const [addGroupModalIsOpen, setAddGroupModalIsOpen] = useState(false);
  const [groupsData, setGroupsData] = useState(
    () => JSON.parse(localStorage.getItem("FairShare_groupsData")) || []
  );
  const [navSelect, setNavSelect] = useState(
    () => JSON.parse(localStorage.getItem("FairShare_navSelect")) || "groups"
  );

  const [showDashboardStyling, setShowDashboardStyling] = useState(true);

  // update groups in local storage any time it changes
  useEffect(() => {
    localStorage.setItem("FairShare_groupsData", JSON.stringify(groupsData));
  }, [groupsData]);

  // update user nav preference in local storage any time it changes
  useEffect(() => {
    localStorage.setItem("FairShare_navSelect", JSON.stringify(navSelect));
  }, [navSelect]);

  function openAddGroupModal() {
    setAddGroupModalIsOpen(true);
    setShowDashboardStyling(false); 
  }

  function closeAddGroupModal() {
    setAddGroupModalIsOpen(false);
    setShowDashboardStyling(true); 
  }

  function addGroup(e, group) {
    e.preventDefault();
    setGroupsData([...groupsData, group]);
    closeAddGroupModal();
    setAddGroupModalIsOpen(false);
  }

  function deleteGroup(id) {
    setGroupsData((prevGroupsData) => {
      const newGroupsData = prevGroupsData.filter(
        (item) => item.groupId !== id
      );
      return newGroupsData;
    });
  }

  function updateNav(selection) {
    switch (selection) {
      case "groups":
        setNavSelect("groups");
        break;
      case "expenses":
        setNavSelect("expenses");
        break;
      case "analytics":
        setNavSelect("analytics");
        break;
    }
  }

  return (
    <div className=" min-h-screen grid grid-cols-8">
      {/* <HomeScreen />   */}
      <Nav
        addGroupModalIsOpen={addGroupModalIsOpen}
        navSelect={navSelect}
        updateNav={updateNav}
      />
      <CreateGroup
        addGroupModalIsOpen={addGroupModalIsOpen}
        addGroup={addGroup}
        closeAddGroupModal={closeAddGroupModal}
      />
      <div className="col-span-6 flex flex-col justify-between">
      {showDashboardStyling && <DashboardStyling />}
        <DisplayGroupList
          groupsData={groupsData}
          setGroupsData={setGroupsData}
          openAddGroupModal={openAddGroupModal}
          deleteGroup={deleteGroup}
          addGroupModalIsOpen={addGroupModalIsOpen}
          navSelect={navSelect}
        />
        <DisplayExpensesList
          navSelect={navSelect}
          addGroupModalIsOpen={addGroupModalIsOpen}
        />
        <DisplayAnalyticsList
          navSelect={navSelect}
          addGroupModalIsOpen={addGroupModalIsOpen}
        />
        <Footer addGroupModalIsOpen={addGroupModalIsOpen} />
      </div>
    </div>
  );
}

export default App;
