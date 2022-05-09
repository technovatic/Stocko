// Imports
import { BrowserRouter } from 'react-router-dom';

// Local Imports
import { AuthPages } from 'pages';
import Navbar from 'components/auth/Navbar';

// Styles
import './App.scss';

const AuthApp = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        { AuthPages }
      </BrowserRouter>
    </div>
  );
};

export default AuthApp;
