import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import PromoPage from './pages/home';
import SubmodulesPage from './pages/submodules';
import QuestionsPage from './pages/questions';
import DashBoardPage from './pages/dashboard';
import CreateAccountPage from './pages/create-account';
import Login from './pages/login';

function App() {
  return (
     <Router>
         <Routes>
              <Route
               path="/"
               element={
                  <PromoPage/>
               }
              /> 
              <Route
                 path='/create-account/submodules'
                 element={
                   <SubmodulesPage/>
                 }
              />
              <Route
                path='/create-account/questions'
                element={
                    <QuestionsPage/>
                }
              />
              <Route
              path='/create-account/confirm'
              /> 
              <Route
                path='/create-account' 
                element={
                    <CreateAccountPage />
                }
              /> 
              <Route
                path="/dashboard" 
                element={ 
                    <DashBoardPage /> 
                }
              /> 
              <Route 
                path='/login' 
                element={
                  <Login/> 
                }
              />
         </Routes>
     </Router>
  )
}

export default App
