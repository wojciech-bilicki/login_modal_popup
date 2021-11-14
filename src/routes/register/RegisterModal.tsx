import { useState } from 'react';
import InputWithIcon from "../../ModalPopup/InputWithIcon";
import ModalRWD from "../../ModalPopup/ModalRWD";
import { AuthFunction } from "../../types";
import { ReactComponent as LoginIcon } from '../../assets/user.svg';
import { ReactComponent as PasswordIcon } from '../../assets/padlock.svg';
import { Button, ButtonContainer, Error } from "../../ModalPopup/ModalPopup.styled";
import { Link } from 'react-router-dom';

interface RegisterModalProps {
  onClose: () => void;
  isModalVisible: boolean;
  registerError?: string;
  onRegisterRequested: AuthFunction;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  onClose,
  isModalVisible,
  registerError,
  onRegisterRequested
}) => {

  const [login, setLogin] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [password, setPassword] = useState('');
  const [localRegisterError, setLocalRegisterError] = useState<string | undefined>()

  const onRegisterTrigger = () => {
    if (validate(passwordRepeat, password)) {
      onRegisterRequested({ password, login })
    } else {
      setLocalRegisterError("Password entries must match")
    }
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onRegisterTrigger()
    }
  }

  const validate = (passwordRepeat: string, password: string) => {
    if (passwordRepeat !== password) {
      return false
    } else {
      return true;
    }
  }

  return (
    <ModalRWD
      onBackdropClick={onClose}
      isModalVisible={isModalVisible}
      header="Register"
      message="You can register here"
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
          value={passwordRepeat}
          onChange={e => setPasswordRepeat(e.target.value)}
          type="password"
          icon={<PasswordIcon width="24px" height="24px" fill="white" />}
        />
        <InputWithIcon
          onKeyDown={onKeyDown}
          onChange={e => setPassword(e.target.value)}
          type="password"
          icon={<PasswordIcon width="24px" height="24px" fill="white" />}
        />
        {registerError && <Error>{registerError}</Error>}
        {localRegisterError && <Error>{localRegisterError}</Error>}
        <ButtonContainer>
          <Button onClick={onClose}>Cancel</Button>
          <Button onClick={onRegisterTrigger}>Register</Button>
        </ButtonContainer>
        <ButtonContainer>
          <Link to="/login">Login</Link>
          <Link to="/forgot_password">Forgot password</Link>
        </ButtonContainer>
      </>
    </ModalRWD>
  )
}

export default RegisterModal;