
import './App.css'
import React from 'react'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {MedicalDashboard} from "@/components/Dashboard/Dashboard.tsx";
import {ServiceRegistrationPage} from "@/components/ServiceRegistration/ServiceRegistration.tsx";

function App() {

  return (
      <Router>
          <Routes>
              <Route path={"/dashboard"} element={<MedicalDashboard/>}></Route>
              <Route path={"/services/register"} element={<ServiceRegistrationPage/>}></Route>
          </Routes>
      </Router>
  )
}

export default App
