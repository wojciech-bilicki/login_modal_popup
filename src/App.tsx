import './App.css';
import { useState } from 'react'
import RWDModal from './ModalPopup/RWDModal';

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Show Modal</button>    
      <RWDModal header="Login" message="Please log in" isModalVisible={isModalVisible} onBackdropClick={toggleModal} /> 
    </div>
  );
}

export default App;
