import React from 'react';
import { Link } from 'react-router-dom';
import {
  FooterContainer,
  FooterButton,
  FooterImage,
  InnerFooterContainer,
} from './style';
import drinkicon from '../../assets/images/drinkIcon.svg';
import exploreIcon from '../../assets/images/exploreIcon.svg';
import mealIcon from '../../assets/images/mealIcon.svg';

function Footer() {
  return (
    <FooterContainer data-testid="footer">
      <InnerFooterContainer>
        <Link to="/drinks">
          <FooterButton type="button">
            <FooterImage
              data-testid="drinks-bottom-btn"
              src={ drinkicon }
              alt="drinks icon"
            />
          </FooterButton>
        </Link>
        <Link to="/explore">
          <FooterButton type="button">
            <FooterImage
              data-testid="explore-bottom-btn"
              src={ exploreIcon }
              alt="explore icon"
            />
          </FooterButton>
        </Link>
        <Link to="/foods">
          <FooterButton type="button">
            <FooterImage
              data-testid="food-bottom-btn"
              src={ mealIcon }
              alt="meal icon"
            />
          </FooterButton>
        </Link>
      </InnerFooterContainer>
    </FooterContainer>
  );
}

export default Footer;
