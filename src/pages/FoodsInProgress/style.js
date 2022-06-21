import styled from 'styled-components';

export const FoodDetailsContainer = styled.div`
`;

export const FoodDetailsImage = styled.img`
  width: 100%;
`;

export const FoodDetailsTitle = styled.h1`
  font-family: "Pacifico";
  text-align: center;
`;

export const FoodDetailsCategory = styled.h2`
  text-align: center;
  color: #616161;
`;

export const TopButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const FoodRecipeCategory = styled.p`

`;

export const FoodDetailsList = styled.ol`
  margin: 1em;
  list-style: inside;
`;

export const FoodDetailsListItem = styled.li`
  margin: 0.25em;
`;

export const FoodDetailsInstructions = styled.p`
  margin: 1em;
`;

export const VideoFrame = styled.iframe`
  width: 90%;
  margin-left: 1em;
  margin-right: 1em;
  border: none;
`;

export const FoodDetailsButton = styled.button`
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
