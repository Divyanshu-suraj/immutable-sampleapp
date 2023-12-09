import { passportInstance } from "../immutable";
import React from "react";

const CallbackPage = () => {
  window.addEventListener("load", function () {
    passportInstance.loginCallback();
  });
  return <div>Loading... Please close this window if it hangs more than 30 seconds.</div>;
};

export default CallbackPage;
