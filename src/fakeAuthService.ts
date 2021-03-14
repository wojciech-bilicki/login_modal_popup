import { LoginArgs } from './ModalPopup/LoginModal'

const loginUser = ({password, login}: LoginArgs): Promise<boolean> => new Promise((resolve, reject) => setTimeout(() => {
  if(login === 'CyberPotato' && password === 'test1234') {
    resolve(true)
  } else {
    reject('Credentials are wrong')
  }
}, 1500)) 



export default loginUser;