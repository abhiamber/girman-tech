import React from "react";
import User from "./user";
import notfound from "../assets/notfound.svg";

const UserList = ({ userList }) => {
  return (
    <>
      {userList?.length > 0 ? (
        <div className="grid grid-cols-3 gap-8 justify-items-center pt-10 px-60">
          {userList?.map((elem, index) => (
            <User key={index} data={elem} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <img src={notfound} alt="Not Found" className="mb-4" />
          <p className="text-gray-600">No results found.</p>
        </div>
      )}
    </>
  );
};

export default UserList;
