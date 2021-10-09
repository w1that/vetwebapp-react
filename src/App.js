import { Route} from 'react-router';
import { ToastContainer } from 'react-toastify';
import './App.css';
import SignupPage from './pages/SignupPage';
import WelcomePage from './pages/WelcomePage';
import 'react-toastify/dist/ReactToastify.css';
import CreatePostPage from './pages/CreatePostPage';
import VisitedVeterinaryPage from './pages/VisitedVeterinaryPage';
import { useSelector } from 'react-redux';
import OwnersMainPage from './pages/OwnersMainPage';
import VetsMainPage from './pages/VetsMainPage';
import OwnersProfilePage from './pages/OwnersProfilePage';
import VetsProfilePage from './pages/VetsProfilePage';
import AdminConsole from './pages/AdminConsole';


function App() {
  const selectedUserType = useSelector(state => state.user.selectedUserType)
  const currentUser = useSelector(state => state.user.currentUser)
  return (
    <div className="App">
    <ToastContainer 
      position="bottom-center"
      autoClose={2000}
    />
        <Route exact path="/"><WelcomePage></WelcomePage></Route>
        <Route path="/signup"><SignupPage></SignupPage></Route>
        <Route path="/mainpage">{currentUser&& currentUser.firstName?<OwnersMainPage></OwnersMainPage>:<VetsMainPage></VetsMainPage>}</Route>
        <Route path="/new-post"><CreatePostPage></CreatePostPage></Route>
        {selectedUserType===0?<Route path="/profile/:username"><OwnersProfilePage></OwnersProfilePage></Route>:''}
        {selectedUserType===1?<Route path="/profile/:clinicName"><VetsProfilePage></VetsProfilePage></Route>:''}
        <Route path="/veterinary/:clinicName"><VisitedVeterinaryPage></VisitedVeterinaryPage></Route>
        <Route path="/admin"><AdminConsole></AdminConsole></Route>

    </div>
  );
}

export default App;
