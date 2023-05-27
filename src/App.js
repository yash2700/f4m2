import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import SignUp from "../src/pages/signup"
import Profile from "./pages/profile"
import {Provider } from "react-redux"
import store from "./redux/store.js"
function App() {
  return (
    <div className="App">
          <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<SignUp />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
        </Routes>
      </Router>
      </Provider >
    </div>
  );
}

export default App;
