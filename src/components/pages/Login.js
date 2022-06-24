import React from "react";
import styled from 'styled-components';
import { PageLayout, Input, PasswordInput } from "components/common";


const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;
`;

const Login = () => {
  const [formFields, setFormFields] = React.useState({ username: '', password: '' });

  const handleInputChange = (e) => {
    e.persist();
    setFormFields(s => ({
      ...s,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <PageLayout>
      <h1>Login</h1>
      <Form>
        <Input
          value={formFields.username}
          type="text"
          name='username'
          placeholder='Username'
          onChange={handleInputChange}
        />
        <PasswordInput
          value={formFields.password}
          name='password'
          onChange={handleInputChange}
        />
      </Form>
    </PageLayout>
  )
};

export default Login; 