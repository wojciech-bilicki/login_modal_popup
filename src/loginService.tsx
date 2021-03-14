export interface LoginArgs {
  login: string;
  password: string;
}

const loginUser = ({password, login}:LoginArgs) => new Promise((resolve, reject) => setTimeout(() => {
  if(login === 'CyberPotato' && password === 'test1234') {
    resolve(true)
  } else {
    reject()
  }
}, 1500))

export default loginUser;