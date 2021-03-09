import styled from 'styled-components'

const ModalContainer = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const DesktopModalContainer = styled(ModalContainer)`
  border-radius: 7px;
  box-shadow: 0 0 32px rgba(0,0,0,0.5);
  padding: 40px;
  width: 450px;
  font-size: 26px;
  `

export const MobileModalContainer = styled(ModalContainer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 16px;
  min-height: 160px;
  font-size: 26px;
`;  

export const Header = styled.h3`
  color: white;
  font-size: 35px;
  line-height: 1em;
  font-weight: 300;
  margin: 5px 0 10px;
  text-align: center;
`

export const Message = styled.p`
  color: #aaa;
  font-size: 15px;
  font-weight: 500;
  margin: 0 0 36px;
  text-align: center;
`;


export const CloseSign = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: #323232;

  &:before,
  &:after {
    position: absolute;
    left: 19px;
    top: 10px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #333;
  }


  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg)
  }
`;



const CLOSE_BUTTON_SIZE = 40;

const CloseButton = styled.div`
  position: absolute;
  width: ${CLOSE_BUTTON_SIZE}px;
  height: ${CLOSE_BUTTON_SIZE}px;
  background-color: #c8c8c8;
  border-radius: 50%;
  cursor: pointer;
  top: -${CLOSE_BUTTON_SIZE / 2}px;
  & > * {
    opacity: 1;
  }

  &:hover > * {
    opacity: 0.4;
  }
`;

export const DesktopCloseButton = styled(CloseButton)`
  left: calc(100% - ${CLOSE_BUTTON_SIZE / 2}px)
`;

export const MobileCloseButton = styled(CloseButton)`
  left: calc(100% - ${CLOSE_BUTTON_SIZE * 1.5 + 10}px)
`