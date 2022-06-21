import styled from 'styled-components';

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.img`
  height: 164px;
  width: 164px;
  margin-left: 15px;
`;

export const FormContainer = styled.form`
  height: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  & input {
    width: 100%;
    border: 1px solid transparent;
    outline: none;
    border-radius: 5px;
    padding: 1em;
    transition: 0.4s ease-in;
    margin: 1em;

    &:focus {
      border: 1px solid #97141a;
    }
  }

  & button {
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 0.5em;
    background-color: #97141a;
    cursor: pointer;
    color: white;
    transition: 0.4s ease;

    &:hover {
      transform: scale(1.025);
    }

    &:disabled {
      background-color: #ccc;
      cursor: not-allowed;
      transform: none;
    }
  }
`;
