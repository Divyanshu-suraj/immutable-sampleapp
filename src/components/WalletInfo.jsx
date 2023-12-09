import React from 'react';

const WalletInfo = ({ address, balance }) => (
  <>
    <div className="text-box-wrapper">
      <div className="text-box disable">
        <input type="text" value={address} placeholder="No address set" disabled />
        <label>Wallet Address</label>
      </div>
    </div>
    <div className="text-box-wrapper">
      <div className="text-box disable">
        <input type="text" value={balance} placeholder="No balance set" disabled />
        <label>Token Balance</label>
      </div>
    </div>
  </>
);

export default WalletInfo;
