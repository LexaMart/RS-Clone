import {AuthContext} from './context/AuthContext';
import {BrowserRouter} from 'react-router-dom';
import {useRoutes} from './routes';
import {useAuth} from './hooks/auth.hook';
import {Navbar} from './components/Navbar';
import 'materialize-css';
import './App.css';
import {Footer} from './components/Footer';

function App() {
  const {login, logout, token, userId} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);
  return (
    <AuthContext.Provider value={{
      login, logout, token, userId, isAuthenticated
    }}>
      <BrowserRouter>
        {isAuthenticated && <Navbar/>}
        <div className='container'>
          {routes}
        </div>
        {isAuthenticated && <Footer/>}
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
