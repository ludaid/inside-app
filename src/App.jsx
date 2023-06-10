import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarHeader from './navbar/NavbarHeader';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PublicRouter from './router/PublicRouter';
import PrivateRouter from './router/PrivateRouter';
function App() {
  let data = localStorage.getItem("userData")
  return (
    <>
      <BrowserRouter>
        <NavbarHeader />
        {/* <PublicRouter/> */}
        {data ? <PrivateRouter /> : <PublicRouter />}
      </BrowserRouter>
    </>
  );
}

export default App;
