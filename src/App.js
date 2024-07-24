import './App.css';
import SignUp from './components/signup';
import Login from './components/login';
import Dashboard from './components/dashboard';

import { useState } from 'react';

function App() {

  const [token,setToken] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [displayDashboard,setDisplayDashboard] = useState(false);

  return (
    <div className="App">
       <Login setToken={setToken} setShowForm={setShowForm} setDisplayDashboard ={setDisplayDashboard}/>
      <SignUp setToken={setToken} showForm={showForm} setShowForm={setShowForm} setDisplayDashboard ={setDisplayDashboard}/>
     
      <Dashboard token={token} displayDashboard={displayDashboard}/>
    </div>
  );
}

export default App;
