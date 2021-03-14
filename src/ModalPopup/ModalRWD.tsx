import React from 'react'
import MediaQuery from 'react-responsive';
import BaseModalWrapper, { BaseModalWrapperProps } from './BaseModalWrapper'
import { DesktopCloseButton, DesktopModalContainer, MobileCloseButton, MobileModalContainer } from './ModalPopup.styled';

type ModalRWDProps = BaseModalWrapperProps;
const ModalRWD: React.FC<ModalRWDProps> = (props) => {
    return (<MediaQuery minWidth={580}>
      {
        matches => matches ? (
          <BaseModalWrapper 
            CloseButtonComponent={DesktopCloseButton}
            ContainerComponent={DesktopModalContainer}
            {...props}
          />
        ) : (
          <BaseModalWrapper 
          CloseButtonComponent={MobileCloseButton}
          ContainerComponent={MobileModalContainer}
          {...props}
          />
        )
      }
    </MediaQuery>);
}

export default ModalRWD