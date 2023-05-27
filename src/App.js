import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SignUp from "../src/pages/signup"
import Profile from "./pages/profile"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
