import styled from 'styled-components';

// export const FoodCardContainer = styled.div`
//   width: 40%;
//   margin: 8px 16px;
//   border: none;
//   box-shadow: 3px 3px 3px #cbcbcb;
//   border-radius: 5px;
// `;
export const FoodCardContainer = styled.div`
padding: '14px';
textDecoration: 'none';
margin: 8px 16px;
border: none;
box-shadow: 3px 3px 3px #cbcbcb;
border-radius: 5px;
`;

export const CardButton = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: none;
  border-radius: 5px;
  font-size: 1.5em;
`;

export const CardImage = styled.img`
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const CardTitle = styled.p`
  color: #454545;
  margin: 5px 0;
`;
