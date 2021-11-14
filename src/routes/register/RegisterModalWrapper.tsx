import { useState } from 'react'
import { useNavigate } from 'react-router';
import { registerUser } from '../../fakeAuthService';
import { AuthFunction } from '../../types';
import RegisterModal from './RegisterModal';


const RegisterModalWrapper = () => {

  const [registerError, setRegisterError] = useState<string | undefined>();

  const navigate = useNavigate();

  const onClose = () => {
    navigate("/")
  }

  const onRegisterRequested: AuthFunction = async (registerData) => {
    try {
      await registerUser(registerData)
    } catch (e) {
      setRegisterError(e as string)
    }
  }

  return (
    <RegisterModal
      isModalVisible={true}
      registerError={registerError}
      onClose={onClose}
      onRegisterRequested={onRegisterRequested} />
  )
}

export default RegisterModalWrapper;