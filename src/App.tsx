import './App.css';
import { useState } from 'react'
import LoginModal from './ModalPopup/LoginModal';

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Show Modal</button>    
      <LoginModal loginError="Credentials are wrong"  isModalVisible={isModalVisible} onBackdropClick={toggleModal} />
    </div>
  );
}

export default App;
