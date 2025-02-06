import React from 'react';
import Front from './components/Front.jsx'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return (
    <>
    <Header title="AegisHealth"/>
    <Outlet/>
    <Footer/>
    </>
  );
}

export default App;
