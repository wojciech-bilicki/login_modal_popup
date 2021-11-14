
import { AuthArgs } from "./types"


const loginUser = ({ password, login }: AuthArgs): Promise<boolean> => new Promise((resolve, reject) => setTimeout(() => {
  if (login === 'CyberPotato' && password === 'test1234') {
    resolve(true)
  } else {
    reject('Credentials are wrong')
  }
}, 1500))

const registerUser = ({ password, login }: AuthArgs): Promise<boolean> => new Promise((resolve, reject) => setTimeout(() => {
  if (login === 'CyberPotato') {
    reject('Login already taken')
  } else {
    resolve(true)
  }
}, 1500))

const forgotPassword = (login: string): Promise<boolean> => new Promise((resolve, reject) => setTimeout(() => {
  if (login === 'CyberPotato') {
    resolve(true);
  }
}, 1500))




export {
  loginUser,
  registerUser,
  forgotPassword
}