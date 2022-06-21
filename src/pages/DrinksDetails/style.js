import styled from 'styled-components';

export const DrinksDetailsContainer = styled.div`

`;

export const DrinksDetailsImage = styled.img`
  width: 100%;
`;

export const DrinksDetailsTitle = styled.h1`
  font-family: "Pacifico";
  text-align: center;
`;

export const DrinksDetailsCategory = styled.p`
  text-align: center;
  color: #616161;
`;

export const TopButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const DrinksList = styled.ul`
  margin: 1em;
  list-style: inside;
`;

export const DrinksListItem = styled.li`
  margin: 0.25em;
`;

export const DrinksInstructions = styled.p`
  margin: 1em;
`;

export const DrinksDetailsButton = styled.button`
  margin: 1em;
  padding: 0.5em;
  border: none;
  border-radius: 5px;
`;

export const BottomButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StartRecipeButton = styled.button`
  position: fixed;
  bottom: 0;
  margin: 1em;
  padding: 0.5em;
  border: none;
  border-radius: 5px;
  background-color: #97141a;
  color: white;
  width: 90%;
`;

export const CarouselContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  width: 8em
`;
