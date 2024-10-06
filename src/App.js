import React, { useState } from 'react';
import "./styles/App.css";
import NavBar from './camponents/UI/NavBar/navBar';
import AppRouter from './camponents/UI/AppRouter/AppRouter';
import AuthContext from './camponents/UI/context/AuthContext';
function App() {
    const [isAuth, setAuth] = useState(true);
  return (
        <AuthContext.Provider   value = {{
          isAuth,
          setAuth
        }}>
          <NavBar></NavBar>
            <div className='App'>
              <AppRouter></AppRouter>
            </div>
        </AuthContext.Provider>
       
  );
}

export default App;
