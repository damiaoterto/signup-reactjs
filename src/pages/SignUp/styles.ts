import styled from 'styled-components';
import PresentationBackground from '../../assets/presentation-background.svg';

export const PresentationSection = styled.div`
  flex: 1;
  flex-grow: 3;
  background: #fcfcfc url(${PresentationBackground}) no-repeat;
  background-size: 710px 710px;
  background-position: center bottom;
  height: 100vh;
  padding: 30px 50px;

  img {
    width: 160px;
  }
`;

export const FormSection = styled.div`
  flex: 1;
  flex-grow: 2;
  padding: 30px 50px;
  margin: 0 auto;

  span {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 80px;

    select {
      color: #8f8f8f;
      font-weight: bold;
      font-size: 14px;
      border: none;
    }
  }

  div {
    b {
      color: #b5b3b3;
      text-transform: uppercase;
    }

    h1 {
      color: #575757;
    }

    p {
      color: #b5b3b3;
      font-weight: 500;

      a {
        color: #5ca5ff;
        font-weight: bold;
        text-decoration: none;
        margin-top: 10px;
        transition: color 0.2s ease-in;

        &:hover {
          color: #2681f0;
        }
      }
    }
  }

  form {
    margin-top: 45px;

    label {
      display: flex;
      flex-direction: column;
      color: #575757;
      font-weight: bold;

      & + label {
        margin-top: 25px;
      }

      div {
        display: flex;
        flex-direction: column;
        border: 2px solid #b5b3b3;
        border-radius: 6px;
        padding: 15px;

        input {
          flex: 1;
          color: #575757;
          border: none;
          font-weight: bold;

          &::placeholder {
            color: #b5b3b3;
          }
        }
      }
    }

    button {
      display: flex;
      justify-content: center;

      color: #ffff;
      background: #FFC727;
      font-weight: bold;
      border: none;
      border-radius: 6px;
      margin-top: 35px;
      width: 100%;
      padding: 15px;
      transition: background 0.2s ease-in;

      &:hover {
        background: #f5b90f;
      }
    }
  }
`;
