import './App.css';
import { Router } from '@reach/router'
import Homepage from './components/HomePage'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

function App() {
  return (
    <div className="App">
      <Router>
        <Homepage default />
        <SignIn path='/signin' />
        <SignUp path='/signup' />
      </Router>
    </div>
  );
}

export default App;
