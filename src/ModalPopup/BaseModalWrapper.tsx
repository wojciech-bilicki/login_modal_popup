import React from 'react'
import Modal from './Modal';
import { DesktopModalContainer, Header } from './ModalPopup.styles';

interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
}

const BaseModalWrapper: React.FC<BaseModalWrapperProps> = ({onBackdropClick, isModalVisible}) => {
    if(!isModalVisible) {
      return null
    }

    return (<Modal onBackdropClick={onBackdropClick} >
      <DesktopModalContainer>
        <Header>Modal Info</Header>
      </DesktopModalContainer>
    </Modal>);
}

export default BaseModalWrapper