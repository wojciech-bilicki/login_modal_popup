import React, { useState } from 'react';
import ModalRWD from '../../ModalPopup/ModalRWD';
import { ReactComponent as LoginIcon } from '../../assets/user.svg';
import { ReactComponent as PasswordIcon } from '../../assets/padlock.svg';
import InputWithIcon from '../../ModalPopup/InputWithIcon';
import { Button, ButtonContainer, Error } from '../../ModalPopup/ModalPopup.styled';
import { Link } from 'react-router-dom';

export interface LoginArgs {
  password: string;
  login: string;
}

export type LoginFunction = (args: LoginArgs) => Promise<void>;

interface LoginModalProps {
  onClose: () => void;
  isModalVisible: boolean;
  loginError?: string;
  onLoginRequested: LoginFunction;
}

const LoginModal: React.FC<LoginModalProps> = ({
  loginError,
  onClose,
  onLoginRequested,
}) => {

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onLoginRequested({ login, password })
    }
  }

  return (
    <ModalRWD
      onBackdropClick={onClose}
      isModalVisible={true}
      header="Login"
      message="Please log in"
    >

      <>
        <InputWithIcon
          onKeyDown={onKeyDown}
          value={login}
          onChange={e => setLogin(e.target.value)}
          type="text"
          icon={<LoginIcon width="24px" height="24px" fill="white" />}
        />
        <InputWithIcon
          onKeyDown={onKeyDown}
          onChange={e => setPassword(e.target.value)}
          type="password"
          icon={<PasswordIcon width="24px" height="24px" fill="white" />}
        />
        {loginError && <Error>{loginError}</Error>}
        <ButtonContainer>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={() => onLoginRequested({ password, login })}>Login</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Link to="/register">Register</Link>
          <Link to="/forgot_password">Forgot password</Link>
        </ButtonContainer>
      </>
    </ModalRWD >
  );
};

export default LoginModal;
