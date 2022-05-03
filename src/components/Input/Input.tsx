import React, { FC } from "react";
import styled from "styled-components";
import iconArrow from "../../assets/images/icon-arrow.svg";
import "./Input.css";

interface InputProps {
  inputValue: string;
  placeholder: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const TextInput = styled.input`
  border: none;
  border-radius: 10px 0 0 10px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  width: 100%;
  cursor: pointer;
`;
const Button = styled.button`
  border: none;
  border-radius: 0 10px 10px 0;
  padding: 0.8rem 1rem;
  background-color: #000;
  cursor: pointer;
`;

const Input: FC<InputProps> = (props) => (
  <InputContainer>
    <TextInput
      placeholder={props.placeholder}
      value={props.inputValue}
      onChange={props.onInputChange}
    ></TextInput>
    <Button onClick={props.onClick}>
      <img src={iconArrow} alt="arrow icon"></img>
    </Button>
  </InputContainer>
);

export default Input;
