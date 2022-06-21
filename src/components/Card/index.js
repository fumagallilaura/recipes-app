import React from 'react';
import { CardContainer, CardImage, CardTitle } from './style';

function Card(objectValues) {
  const { source, alt, title, test } = objectValues;
  return (
    <CardContainer>
      <CardImage
        data-testid={ test }
        src={ source }
        alt={ alt }
      />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
}

export default Card;
