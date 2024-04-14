// import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Login from './screens/Login';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import SignUp from './screens/SignUp';
import { CartProvider } from './components/ContextReducer';
// import '../node_modules/bootstrap/dist/bootstrap.bundle.min.js'

function App() {
  return (
    <CartProvider>

    <Router>

    <div >
      {/* Helllllllllllllooooooo */}
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/createuser' element={<SignUp/>} />

      {/* <Home /> */}
      </Routes>
    </div>
    
    </Router>
    </CartProvider>
  );
}

export default App;
