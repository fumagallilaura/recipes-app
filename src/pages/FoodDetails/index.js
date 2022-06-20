import React, { useContext, useEffect } from 'react';
import RecipesContext from '../../context/RecipesContext';

function FoodDetails() {
  const { setTitle, setBtnSearchIcon } = useContext(RecipesContext);
  useEffect(() => {
    setTitle('Foods Details');
    setBtnSearchIcon(false);
  }, [setTitle, setBtnSearchIcon]);
  return (
    <div>
      <span>oi</span>
      { /* https://backefront.com.br/como-usar-useparams-react/ tem q fazer por aqui por causa dos testes */ }
    </div>
  );
}

export default FoodDetails;
