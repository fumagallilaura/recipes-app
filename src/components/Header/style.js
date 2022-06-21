import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: #97141a;
  box-shadow: 0 5px #51060a;
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 25px;
  flex-wrap: wrap;
`;

export const HeaderTitle = styled.h1`
  color: white;
`;

export const HeaderButton = styled.button`
  border: none;
  width: 64px;
  height: 64px;
  background-color: transparent;
`;

export const HeaderImage = styled.img`
`;

export const HeaderSearchBar = styled.div`
  margin-top: 10px;
  padding: 1em;
  width: 100%;
  display: flex;
  align-items: center;
`;
