import React, { useEffect, useState } from 'react';
import { Input, LoginButton } from '../../components';
import { LoginContainer, Logo, FormContainer } from './style';
import logo from '../../assets/images/logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  // https://dev.to/shareef/react-usestate-hook-is-asynchronous-1hia
  useEffect(() => {
    const validateTest = () => {
      const minLength = 6;
      const verifyEmail = /\S+@\S+\.\S+/;
      if (password.length > minLength && verifyEmail.test(email)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
    validateTest();
  });

  const handleChange = ({ target: { type, value } }) => (
    type === 'email' ? setEmail(value) : setPassword(value)
  );

  const submit = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    setLoading(true);
  };

  const emailInput = {
    test: 'email-input',
    name: 'email',
    type: 'email',
    value: email,
    placeholder: 'Email',
    handleChange,
  };

  const passwordInput = {
    test: 'password-input',
    name: 'password',
    type: 'password',
    value: password,
    placeholder: 'Password',
    handleChange,
  };

  const buttonParams = {
    test: 'login-submit-btn',
    name: 'Login',
    disabled,
    handleClick: submit,
    loading,
    page: '/foods',
  };

  return (
    <LoginContainer>
      <Logo
        src={ logo }
      />
      <FormContainer>
        <Input inputValues={ emailInput } />
        <Input inputValues={ passwordInput } />
        <LoginButton>
          { buttonParams }
        </LoginButton>
      </FormContainer>
    </LoginContainer>
  );
}

export default Login;
