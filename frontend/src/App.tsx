import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import CreateAccountPage from "./pages/create-account";

function App() {
  return (
     <Router>
         <Routes>
             <Route path="/create-account" element={<CreateAccountPage/>}></Route>
         </Routes>
     </Router>
  )
}

export default App
