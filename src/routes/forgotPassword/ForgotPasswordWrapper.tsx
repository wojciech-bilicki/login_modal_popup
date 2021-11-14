import { useNavigate } from "react-router";
import { forgotPassword } from "../../fakeAuthService";
import { ResetPasswordFunction } from "../../types";
import ForgotPasswordModal from "./ForgotPasswordModal";

const ForgotPassword = () => {

  const navigate = useNavigate();

  const onClose = () => {
    navigate("/")
  }

  const onResetPasswordRequested: ResetPasswordFunction = async (login) => {
    await forgotPassword(login)
  }

  return (
    <ForgotPasswordModal
      isModalVisible={true}
      onClose={onClose}
      onResetPasswordRequested={onResetPasswordRequested}
    />
  )
}

export default ForgotPassword;