import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Profile } from './Profile';
import { LoginButton } from './Login';
import { LogoutButton } from './Logout';
import logo from './logo.svg';
import './App.css';

function App() {
  const {isAuthenticated}=useAuth0();

  return (
    <div style ={{ 
      backgroundImage: 'url:("https://img2.freepng.es/20180402/utq/kisspng-computer-icons-user-profile-symbol-register-button-5ac216244ae0b8.5347759615226690923067.jpg")'
    }}>
        {isAuthenticated ? (
          <>
          <Profile />
          <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      
    </div>
  );
}

export default App;
