import styled from 'styled-components'


export const InputWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  align-items: center;


  input {
    display: block;
    background: none;
    border: none;
    &:focus {
      outline: none;
    }
  }
`;

const ModalInput = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  display: inline-block;
  outline: none;
  padding: 5px 0;
  margin: 5px 0;
  width: 100%;
  text-indent: 8px;
`;

const InputContainer = styled(InputWrapper).attrs({ isOpen: true })`
  margin-bottom: 10px;
  width: 100%;
  font-size: 60%;
  border: 1px solid grey;
  padding: 5px;
`;

const IconContainer = styled.div`
  width: 33px;
  padding-left: 6px;
`;

type InputIconProps = { icon?: JSX.Element } & JSX.IntrinsicElements['input'];

export const InputWithIcon: React.FC<InputIconProps> = 
  ({ icon, ref, ...props }) => (
    <InputContainer >
      {icon && <IconContainer>{icon}</IconContainer>}
      <ModalInput {...props} />
    </InputContainer>
  )
;
