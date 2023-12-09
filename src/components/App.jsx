import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import "./App.css"
import { passportInstance, getWalletInfo } from "../immutable";
import UserInfo from './UserInfo';
import TokenInfo from './TokenInfo';
import WalletInfo from './WalletInfo';
import Transaction from './Transaction';

export default function App () {
  const [user, setUser] = useState(undefined);
  const [walletAddress, setWalletAddress] = useState('');
  const [walletBalance, setWalletBalance] = useState('');
  const navigate = useNavigate()

  // TO DO: Fetch User
  const fetchUser = async () => {
    try {
      const userProfile = await passportInstance.getUserInfo();
      const accessToken = await passportInstance.getAccessToken();
      const idToken = await passportInstance.getIdToken();

      Boolean(userProfile === undefined) && navigate("/")

      setUser({
        Nickname: userProfile?.nickname,
        Email: userProfile?.email,
        accessToken: accessToken,
        idToken: idToken,
        sub: userProfile?.sub,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    if (user) {
      const fetchWalletInfo = async () => {
        const info = await getWalletInfo();
        setWalletAddress(info.walletAddress);
        setWalletBalance(info.balanceInEther);
      };

      fetchWalletInfo();
    }
  }, [user]);

  return(
    <div className='card'>
      <div className='hi-header'>
        <h1>Hello {user?.Nickname ?? 'there'} 👋 </h1>
        <a onClick={() => {
          passportInstance.logout();
          navigate("/");
        }}>Logout</a> 
      </div>
      {user && (
        <>
          <UserInfo label="Nickname" value={user.Nickname} />
          <UserInfo label="Email" value={user.Email} />
          <UserInfo label="Sub" value={user.sub} />
          <WalletInfo address={walletAddress} balance={walletBalance} />
          <TokenInfo label="Access Token" value={user.accessToken} />
          <TokenInfo label="ID Token" value={user.idToken} />

        </>
      )}
      <Transaction/>
    </div>
  );
}
