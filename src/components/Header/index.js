import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../../assets/images/profileIcon.svg';
import searchIcon from '../../assets/images/searchIcon.svg';
import RecipesContext from '../../context/RecipesContext';
import {
  HeaderButton, HeaderContainer, HeaderImage, HeaderSearchBar, HeaderTitle,
} from './style';
import SearchBar from '../SearchBar';

function Header() {
  const { title, btnSearchIcon, searchBar, setSearchBar } = useContext(RecipesContext);

  return (
    <HeaderContainer>
      <Link to="/profile">
        <HeaderButton type="button">
          <HeaderImage
            data-testid="profile-top-btn"
            src={ profileIcon }
            alt="Profile Icon"
          />
        </HeaderButton>
      </Link>

      <HeaderTitle
        data-testid="page-title"
      >
        { title }
      </HeaderTitle>
      {
        btnSearchIcon ? (
          <HeaderButton
            type="button"
            onClick={ () => (
              searchBar === true ? setSearchBar(false) : setSearchBar(true)
            ) }
          >
            <HeaderImage
              data-testid="search-top-btn"
              src={ searchIcon }
              alt="Explore Icon"
            />
          </HeaderButton>
        ) : (
          <HeaderButton>
            <HeaderImage
              src={ searchIcon }
              alt="Invisible Icon"
              style={ { display: 'none' } }
            />
          </HeaderButton>
        )
      }
      <HeaderSearchBar>
        {
          searchBar && <SearchBar />
        }
      </HeaderSearchBar>
    </HeaderContainer>
  );
}

export default Header;
