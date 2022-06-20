import React, { useContext, useEffect } from 'react';
// import { Header, Footer } from '../../components';
import RecipesContext from '../../context/RecipesContext';

function DrinksDetails() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Drinks Details');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);
  return (
    <div>
      <span>oi start</span>
      { /* https://backefront.com.br/como-usar-useparams-react/ tem q fazer por aqui por causa dos testes */ }
    </div>
  );
}

export default DrinksDetails;
