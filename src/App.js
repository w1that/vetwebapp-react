import { Route} from 'react-router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import SignupPage from './pages/SignupPage';
import WelcomePage from './pages/WelcomePage';
import 'react-toastify/dist/ReactToastify.css';
import MainPage from './pages/MainPage';
import CreatePostPage from './pages/CreatePostPage';
import ProfilePage from './pages/ProfilePage';
import VisitedVeterinaryPage from './pages/VisitedVeterinaryPage';


function App() {
  return (
    <div className="App">
    <ToastContainer 
      position="bottom-center"
      autoClose={2000}
    />
        <Route exact path="/"><WelcomePage></WelcomePage></Route>
        <Route path="/signup"><SignupPage></SignupPage></Route>
        <Route path="/mainpage"><MainPage></MainPage></Route>
        <Route path="/new-post"><CreatePostPage></CreatePostPage></Route>
        <Route path="/profile/:username"><ProfilePage></ProfilePage></Route>
        <Route path="/veterinary/:clinicName"><VisitedVeterinaryPage></VisitedVeterinaryPage></Route>
    </div>
  );
}

export default App;
