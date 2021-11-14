import { useState } from 'react'
import { useNavigate } from "react-router";
import { loginUser } from "../../fakeAuthService";
import { AuthFunction } from '../../types';
import LoginModal from "./LoginModal"

const LoginModalWrapper = () => {

  const [loginError, setLoginError] = useState<string | undefined>()

  const navigate = useNavigate();
  const onClose = () => {
    navigate("/")
  }

  const onLoginRequested: AuthFunction = async (loginData) => {
    try {
      await loginUser(loginData)
    } catch (e) {
      setLoginError(e as string);
    }
  }

  return (
    <LoginModal loginError={loginError} isModalVisible={true} onClose={onClose} onLoginRequested={onLoginRequested} />
  )
}

export default LoginModalWrapper;