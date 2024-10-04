import { useState, useEffect } from "react";
import "./App.css";
import CreateGroup from "./components/Groups/CreateGroup";
import DisplayGroupList from "./components/Groups/DisplayGroupList";
import DashboardStyling from "./components/UserDashboard/DashboardStyling";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import DisplayExpensesList from "./components/Expenses/DisplayExpensesList";
import DisplayAnalyticsList from "./components/Analytics/DisplayAnalyticsList";
import LandingPage from "./components/Landing/LandingPage";
import SignUp from "./components/SignUp/SignUp";
import AddExpense from "./components/Expenses/AddExpenses";

function App() {
  const [addGroupModalIsOpen, setAddGroupModalIsOpen] = useState(false);
  const [addExpenseGroupIsOpen, setAddExpenseGroupIsOpen] = useState(false);
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [groupsData, setGroupsData] = useState(
    () => JSON.parse(localStorage.getItem("FairShare_groupsData")) || []
  );
  const [navSelect, setNavSelect] = useState(
    () => JSON.parse(localStorage.getItem("FairShare_navSelect")) || "groups"
  );
  const [isFirstVisit, setIsFirstVisit] = useState(
    () => !localStorage.getItem("FairShare_hasVisited")
  );
  const [showSignUp, setShowSignUp] = useState(false);

  useEffect(() => {
    if (isFirstVisit) {
      localStorage.setItem("FairShare_hasVisited", "true");
    }
  }, [isFirstVisit]);

  // update groups in local storage any time it changes
  useEffect(() => {
    localStorage.setItem("FairShare_groupsData", JSON.stringify(groupsData));
  }, [groupsData]);

  // update user nav preference in local storage any time it changes
  useEffect(() => {
    localStorage.setItem("FairShare_navSelect", JSON.stringify(navSelect));
  }, [navSelect]);

  function openAddGroupModal(groupId) {
    setSelectedGroupId(groupId);
    setAddGroupModalIsOpen(true);
  }

  function closeAddGroupModal() {
    setAddGroupModalIsOpen(false);
  }

  function addGroup(e, group) {
    e.preventDefault();
    setGroupsData([...groupsData, group]);
    closeAddGroupModal();
    setAddGroupModalIsOpen(false);
  }
  function addExpenseModal(groupId){
    setSelectedGroupId(groupId);
    setAddExpenseGroupIsOpen(true);
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

  function handleGetStarted() {
    setShowSignUp(true);
  }

  function handleSignUpComplete() {
    setShowSignUp(false);
    setIsFirstVisit(false);
  }

  return (
    <div className="min-h-screen grid grid-cols-8">
      {isFirstVisit ? (
        <div className="col-span-8 flex justify-center items-center">
          <LandingPage handleGetStarted={handleGetStarted} />
        </div>
      ) : (
        <>
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
            {!addGroupModalIsOpen ? <DashboardStyling /> : null}
            <DisplayGroupList
              groupsData={groupsData}
              setGroupsData={setGroupsData}
              openAddGroupModal={openAddGroupModal}
              deleteGroup={deleteGroup}
              addGroupModalIsOpen={addGroupModalIsOpen}
              navSelect={navSelect}
              addExpenseGroupIsOpen={addExpenseGroupIsOpen}
              addExpenseModal={addExpenseModal}
            />
            <DisplayExpensesList
              navSelect={navSelect}
              addGroupModalIsOpen={addGroupModalIsOpen}
            />
            <DisplayAnalyticsList
              navSelect={navSelect}
              addGroupModalIsOpen={addGroupModalIsOpen}
            />
            

           {addExpenseGroupIsOpen && (
            <AddExpense 
            groupId={selectedGroupId}/>
           )}
            
            <Footer addGroupModalIsOpen={addGroupModalIsOpen} />
          </div>
        </>
      )}
      {showSignUp && <SignUp closeSignUp={handleSignUpComplete} />}
    </div>
  );
}

export default App;
