import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import { filterData } from "./utils/filterFunction";

const App = () => {
  const [showInput, setShowInput] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const [userList, setUserList] = useState();

  function handleSearch(searchTerm) {
    let data = filterData(searchTerm);
    setUserList(data);
    if (location.pathname == "/") {
      navigate("/search");
    }
  }

  useEffect(() => {
    filterData();
    if (location.pathname === "/search") {
      setShowInput(true);
    } else {
      setShowInput(false);
    }
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-400">
      <Navbar
        showInput={showInput}
        setShowInput={setShowInput}
        handleEnterPress={handleSearch}
      />
      <main className="pt-1">
        <Routes>
          <Route path="/" element={<Home handleEnterPress={handleSearch} />} />
          <Route path="/search" element={<UserList userList={userList} />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
