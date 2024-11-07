import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import React from 'react';
import KycInfo from './pages/KycInfo';
import PersistentDrawerLeft from './components/sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const DashboardLayout = () => (
  <div>
    <PersistentDrawerLeft showSidebar={true} style={{ overflowX: "hidden" }}>
      <Outlet /> {/* Nested routes will render here */}
    </PersistentDrawerLeft>
  </div>
);
function App() {
  return (
   <div>
<Router>
    <Routes>
       <Route path="/" element={<DashboardLayout />}>
        <Route path="kyc" element={<KycInfo />} />  
        {/* <Route path="kyc-approval" element={<KycApprovals />} /> */}
        </Route>
       </Routes>
       </Router>
   </div>
  );
}

export default App;
