import { Route, Router, Switch } from 'react-router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import SignupPage from './pages/SignupPage';
import WelcomePage from './pages/WelcomePage';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
    <ToastContainer />
        <Route exact path="/"><WelcomePage></WelcomePage></Route>
        <Route path="/signup"><SignupPage></SignupPage></Route>
    </div>
  );
}

export default App;
