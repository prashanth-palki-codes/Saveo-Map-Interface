import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Coordinates from './components/Coordinates';
import MyMap from './components/MyMap'; 

function App() {
  return (
    <div className="container">
      <Header />
      <Coordinates />
      <MyMap />
    </div>
  );
}

export default App;
