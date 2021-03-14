import React from 'react'
import styled from 'styled-components'

const InputWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;

  input {
    display: block;
    background-color: white;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;

const InputContainer = styled(InputWrapper)`
  margin-bottom: 10px;
  width: 100%;
  font-size: 60%;
  border: 1px solid grey;
  padding: 5px;
`
const IconContainer = styled.div`
  width: 33px;
  padding-left: 6px;
`

const ModalInput = styled.input`
  display: inline-block;
  outline: none;
  padding: 5px 0;
  margin: 5px 0;
  width: 100%;
  text-indent: 8px;

`;


type InputWithIconProps = {icon?: JSX.Element} & JSX.IntrinsicElements['input'] 

const InputWithIcon: React.FC<InputWithIconProps> = ({icon, ref, ...props}) => {
    return (<InputContainer>
    {icon && <IconContainer>{icon}</IconContainer>}
    <ModalInput {...props} />
    </InputContainer>);
}

export default InputWithIcon