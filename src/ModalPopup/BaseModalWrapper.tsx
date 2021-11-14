import React, { MouseEventHandler, ReactNode } from 'react'
import Modal from './Modal';

import { CloseSign, Header, Message } from './ModalPopup.styled'

export interface BaseModalWrapperProps {
  isModalVisible: boolean;
  onBackdropClick: () => void;
  header: string;
  message?: string;
}

interface ComponentsProps {
  ContainerComponent: React.ComponentType<{}>;
  CloseButtonComponent: React.ComponentType<{
    onClick?: MouseEventHandler<any>;
  }>;
}

type Props = BaseModalWrapperProps & ComponentsProps;

const BaseModalWrapper: React.FC<Props> = ({ children, ContainerComponent, CloseButtonComponent, isModalVisible, onBackdropClick, header, message }) => {

  if (!isModalVisible) {
    return null
  }

  return (<Modal onBackdropClick={onBackdropClick}>
    <ContainerComponent>
      <CloseButtonComponent onClick={onBackdropClick}>
        <CloseSign />
      </CloseButtonComponent>
      <Header>{header}</Header>
      {message && <Message>{message}</Message>}
      {children}
    </ContainerComponent>
  </Modal>);
}

export default BaseModalWrapper