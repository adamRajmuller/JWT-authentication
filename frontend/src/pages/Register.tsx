import React, { FC, useState } from 'react';
import { useRegisterUserMutation } from 'src/generated/graphql';
import { RouteComponentProps } from 'react-router-dom';

const Register: FC<RouteComponentProps> = ({ history }) => {
const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register] = useRegisterUserMutation();

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log('form submitted');
        const response = await register({
          variables: {
            email: email,
            password: password,
          },
        });
        console.log(response);
        history.push('/');
      }}
    >
      <div>
        <input value={email} type='email' placeholder='email' onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <input
          value={password}
          type='password'
          minLength={8}
          placeholder='password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type='submit'>register</button>
    </form>
  );
};

export default Register;
