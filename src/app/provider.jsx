"use client"
import React, { useEffect, useState } from "react";
import Header from "./_components/Header";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "./_context/UserDetailContext";

function Provider({ children }) {
  const { user, isLoaded } = useUser();
const [userDetail,setUserDetail]=useState()
  useEffect(() => {
    if (isLoaded && user) {
      CheckUserAuth();
    }
  }, [isLoaded, user]);

  const CheckUserAuth = async () => {
    try {
      const result = await axios.post("/api/users", {
        userName: user.fullName,
        userEmail: user.primaryEmailAddress?.emailAddress,
      });
      console.log("✅ User saved:", result.data);
      setUserDetail(result.data)
    } catch (error) {
      console.error("❌ Axios error:", error);
    }
  };

  return (
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
      <div>
        <Header />
        <div className="px-10 lg:px-32 xl:px-48 2xl:px-56">{children}</div>
      </div>
    </UserDetailContext.Provider>
  );
}

export default Provider;
