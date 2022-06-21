import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  background-color: #ebe6e6;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0.5em;
  border-radius: 5px;
  box-shadow: 2px 2px 2px #cbcbcb;

  & input {
    width: 100%;
    margin: 0.5em;
    border: none;
    border-radius: 5px;
    padding: 1em;
  }
`;

export const SearchBarButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 5px;
  padding: 0.5em;
  margin-top: 1em;
  background-color: #97141a;
  color: white;
`;
