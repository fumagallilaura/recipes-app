import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../../components';
import RecipesContext from '../../context/RecipesContext';
import { ProfileButton, ProfileContainer, ProfileEmail } from './style';

function Profile() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Profile');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);

  const getEmail = () => {
    if (localStorage.getItem('user') !== null) {
      const { email } = JSON.parse(localStorage.getItem('user'));
      return email;
    }
  };

  const clearLocalStorage = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
  };

  return (
    <ProfileContainer>
      <Header />
      <ProfileEmail data-testid="profile-email">
        { getEmail() }
      </ProfileEmail>
      <Link to="/done-recipes">
        <ProfileButton
          type="button"
          data-testid="profile-done-btn"
        >
          Done Recipes
        </ProfileButton>
      </Link>
      <Link to="/favorite-recipes">
        <ProfileButton
          type="button"
          data-testid="profile-favorite-btn"
        >
          Favorite Recipes
        </ProfileButton>
      </Link>
      <Link to="/">
        <ProfileButton
          type="button"
          data-testid="profile-logout-btn"
          onClick={ clearLocalStorage }
        >
          Logout
        </ProfileButton>
      </Link>
      <Footer />
    </ProfileContainer>
  );
}

export default Profile;
