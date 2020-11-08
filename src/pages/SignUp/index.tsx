import React from 'react';
import { Link } from 'react-router-dom';
import { FiAtSign, FiLock } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import { Container } from '../../styles';
import LogoProject from '../../assets/logo-project.svg';

import { PresentationSection, FormSection } from './styles';

const SignUp: React.FC = () => (
  <Container>
    <PresentationSection>
      <img src={LogoProject} alt="Logo Project" />
    </PresentationSection>

    <FormSection>
      <span>
        <select>
          <option value="pt-br">English (USA)</option>
        </select>
      </span>

      <div>
        <b>Start for Free</b>
        <h1>Sign Up to Planet Creative</h1>
        <p>Already a member? <Link to="/">Log in</Link></p>
      </div>

      <form>
        <label htmlFor="email">
          e-mail
          <div>
            <input id="email" type="email" placeholder="you@exempla.com" />
            <FiAtSign size={25} color="#575757" />
          </div>
        </label>

        <label htmlFor="password">
          password
          <div>
            <input id="password" type="password" placeholder="+ 6 Characteres" />
            <FiLock size={25} color="#575757" />
          </div>
        </label>

        <button type="submit">Create an account</button>
        <Link to="/">
          <FaGoogle size={25} color="#ffff" />
          Sign Up with Google
        </Link>
      </form>
    </FormSection>
  </Container>
);

export default SignUp;
