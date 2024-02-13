import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Pagetitle from './Component/Pagetitle';
import Users from './Component/Users';

function App() {
  return (
    <>
    
      <Pagetitle  title='all users' />
      <Users/>
    </>
  );
}

export default App;
