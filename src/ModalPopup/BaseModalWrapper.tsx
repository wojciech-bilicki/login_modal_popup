import React, { MouseEventHandler } from 'react'
import Modal from './Modal';
import {  Header, Message, CloseSign } from './ModalPopup.styles';

export interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
  header: string;
  message?: string;
}

interface ComponentsProps {
  ContainerComponent: React.ComponentType<{}>,
  CloseButtonComponent: React.ComponentType<{
    onClick?: MouseEventHandler<any>
  }>
}

type Props = BaseModalWrapperProps & ComponentsProps;

const BaseModalWrapper: React.FC<Props> = ({onBackdropClick, isModalVisible, header, message, ContainerComponent, CloseButtonComponent }) => {
    if(!isModalVisible) {
      return null
    }

    return (<Modal onBackdropClick={onBackdropClick} >
      <ContainerComponent>
        <CloseButtonComponent onClick={onBackdropClick}>
          <CloseSign />
        </CloseButtonComponent>
        <Header>{header}</Header>
        {message && <Message>{message}</Message>}
      </ContainerComponent>
    </Modal>);
}

export default BaseModalWrapper