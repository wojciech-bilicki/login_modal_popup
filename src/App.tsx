import './App.css';
import { useState } from 'react'
import BaseModalWrapper from './ModalPopup/BaseModalWrapper';

function App() {

  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = () => {
    setIsModalVisible(wasModalVisible => !wasModalVisible)
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Show Modal</button>    
      <BaseModalWrapper isModalVisible={isModalVisible} onBackdropClick={toggleModal} /> 
    </div>
  );
}

export default App;
