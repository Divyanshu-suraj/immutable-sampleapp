import React from 'react';

const UserInfo = ({ label, value }) => (
  <div className="text-box-wrapper">
    <div className="text-box disable">
      <input type="text" value={value ?? ''} placeholder="No value set" disabled />
      <label>{label}</label>
    </div>
  </div>
);

export default UserInfo;
