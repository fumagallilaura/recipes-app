import React, { useState } from 'react';
import { Input } from '../../components';
import { LoginContainer, Logo, FormContainer } from './style';
import logo from '../../assets/images/logo.png';
import LoginButton from '../../components/LoginButton';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const validateTest = () => {
    const minLength = 6;
    const verifyEmail = /\S+@\S+\.\S+/;
    if (password.length >= minLength && verifyEmail.test(email)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleChange = ({ target: { type, value } }) => {
    validateTest();
    return type === 'email' ? setEmail(value) : setPassword(value);
  };

  const submit = () => {
    localStorage.setItem('user', JSON.stringify({ email }));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    setLoading(true);
    // history.push('/food');
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