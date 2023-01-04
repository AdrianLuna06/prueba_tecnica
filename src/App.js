import './App.css';
import { Routes, Route } from 'react-router-dom'
import { LoginUsers } from './page/index'
import { HomeComponent } from './components/homeComponent'


function App() {
  return (
    <div>

      <Routes>

          <Route path="/login" element={ <LoginUsers/> } />
          <Route path="/home" element={ <HomeComponent/> } />

      </Routes>
      
    </div>
  );
}

export default App;
