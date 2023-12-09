import React, { useEffect } from "react";
import { passportInstance } from "../immutable";
import { useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate()
  
  const checkUserLoggedIn = async () => {
    try {
      const userProfile = await passportInstance.getUserInfo();
      Boolean(userProfile === undefined) ? navigate("/login") : navigate("/app")
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return <></>
}
