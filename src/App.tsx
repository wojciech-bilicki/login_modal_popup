import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

function App() {

  return (
    <div className="App">
      <NavWrapper>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/forgot_password">Forgot Password</Link>
      </NavWrapper>
      <div>This is our wonderful app</div>
      <Outlet />
      {/* <button onClick={toggleModal}>Show modal</button>
      <LoginModal loginError={loginError} onClose={onBackdropClick} onLoginRequested={onLoginRequest} isModalVisible={isModalVisible} /> */}
    </div>
  );
}

export default App;

const NavWrapper = styled.nav`
margin: 0 auto;
  width: 500px;
  display: flex;
  justify-content: space-between;
`;