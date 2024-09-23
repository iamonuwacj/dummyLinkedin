import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './components/Login';
import Header from './components/Header';


function App() {



  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Login />}
          />

          <Route 
            path='/home'
            element={<Header />}
          />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
