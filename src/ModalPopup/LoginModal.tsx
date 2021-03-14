import React, { useState } from 'react';
import { InputWithIcon } from './InputWithIcon';
import { BottomContainer, Button, Error } from './ModalPopup.styles';
import { ReactComponent as LoginIcon } from '../assets/user.svg'
import { ReactComponent as PasswordIcon } from '../assets/padlock.svg'

import RWDModal from './RWDModal';

interface LoginModalProps {
  loginError?: string;
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  loginError,
  isModalVisible,
  onBackdropClick,
}) => {

  const [loginValue, setLoginValue] = useState('');
  const [password, setPasswordValue] = useState('');

  return (
    <RWDModal
      onBackdropClick={onBackdropClick}
      isModalVisible={isModalVisible}
      header="Login"
      message="Please log in"
      content={
        <>
        <InputWithIcon 
          value={loginValue}
          onChange={e => setPasswordValue(e.target.value)}
          type="text"
          icon={
            <LoginIcon width="24px" height="24px" fill="white" />
          }
          />
        <InputWithIcon
          
          onChange={e => setLoginValue(e.target.value)}
          value={password}
          type="password"
          icon={
            <PasswordIcon width="24px" height="24px" fill="white" />
          }
        />
         {loginError && (
                <Error >
                  {loginError}
                </Error>
              )}
        <BottomContainer>
          <Button onClick={onBackdropClick}>Close</Button>
        <Button>Login</Button>
        </BottomContainer>
        </>
      }
    />
  );
};

export default LoginModal;
