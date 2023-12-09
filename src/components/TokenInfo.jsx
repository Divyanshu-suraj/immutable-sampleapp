import React from 'react';

const TokenInfo = ({ label, value }) => (
  <div className="text-box-wrapper token-info">
    <div className="text-box disable">
    <textarea value={value ?? ''} placeholder="No value set" disabled wrap="soft" className="token-value-textarea"></textarea>
      <label>{label}</label>
    </div>
    <a onClick={() => {
      navigator.clipboard.writeText(value);
      console.log(`Copied ${label}:`, value);
    }}>Copy</a>
  </div>
);

export default TokenInfo;
