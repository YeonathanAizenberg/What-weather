import MainPage from './components/pages/mainPage/MainPage';
import Favorites from './components/pages/favorites/Favorites';
import NavBar from './components/organisms/navBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="App" style={{backgroundImage: `url(weatherImage.jpg)` }}>
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<MainPage/>}/>
          <Route exact path="/favorites" element={<Favorites/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
