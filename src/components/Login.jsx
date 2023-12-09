import React, { useState, useEffect } from  "react";
import { passportInstance, fetchAuth } from "../immutable";
import { useNavigate } from "react-router-dom";

function Login() {
  // TODO: login state and hook
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const checkUserLoggedIn = async () => {
    const userProfile = await passportInstance.getUserInfo();
    Boolean(userProfile !== undefined) && navigate("/app")
  }
  useEffect(() => {
    checkUserLoggedIn()
  }, [])
  
  return (
    <>
      <div className="card">
        <h1>Immutable Passport Sample</h1>
        <button 
          disabled={loading}
          onClick={async () => {
            setLoading(true);
            await fetchAuth();
            setLoading(false);
          }}>
            <span/>
            <span/>
            <span/>
            <span/>
          {loading ? "Loading..." : "Log in with Passport"}
        </button>
      </div>
    </>
  )
}

export default Login
