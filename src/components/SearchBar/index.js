import React, { useContext } from 'react';
import Input from '../Input';
import { SearchBarButton, SearchBarContainer } from './style';
import RecipesContext from '../../context/RecipesContext';

function SearchBar() {
  const { setSearch, setRadio,
    submitApi } = useContext(RecipesContext);

  const handleChange = ({ target: { type, value } }) => (
    type === 'text' ? setSearch(value) : setRadio(value)
  );

  const objInputText = {
    test: 'search-input',
    name: 'SearchInput',
    type: 'text',
    placeholder: 'Search Recipe',
    handleChange,
  };

  const objInputCheckB1 = {
    test: 'ingredient-search-radio',
    name: 'radioButton',
    type: 'radio',
    value: 'Ingredients',
    placeholder: 'Ingredients',
    handleChange,
  };

  const objInputCheckB2 = {
    test: 'name-search-radio',
    name: 'radioButton',
    type: 'radio',
    value: 'Name',
    placeholder: 'Name',
    handleChange,
  };

  const objInputCheckB3 = {
    test: 'first-letter-search-radio',
    name: 'radioButton',
    type: 'radio',
    value: 'FirstLetter',
    placeholder: 'Fist Letter',
    handleChange,
  };

  return (
    <SearchBarContainer>
      <Input inputValues={ objInputText } />
      <Input inputValues={ objInputCheckB1 } />
      Ingredients
      <Input inputValues={ objInputCheckB2 } />
      Name
      <Input inputValues={ objInputCheckB3 } />
      First Letter

      <SearchBarButton
        type="button"
        data-testid="exec-search-btn"
        onClick={ submitApi }
      >
        Search
      </SearchBarButton>
    </SearchBarContainer>
  );
}

export default SearchBar;
