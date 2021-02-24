import styled from 'styled-components';
import LoginBG from '../../assets/LoginBG.svg';

export const Container = styled.div`
  height: 100vh;

  display: flex;

  align-items: stretch;
`;

export const Background = styled.div`
  flex: 1;
  background: linear-gradient(360deg, #130525 0%, rgba(105, 57, 153, 0) 100%),
    url(${LoginBG}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 44%;
  padding-left: 23vh;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
    align-items: center;
    padding: 200px 16px;
    width: 441px;
  }
`;

export const LoginBox = styled.div`
  max-width: 288px;
  padding: 0 16px;
  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 48px;

    color: #383e71;
    margin-bottom: 16px;
  }
  header {
    font-family: Montserrat;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    color: #989fdb;
    margin-bottom: 43px;
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-top: 32px;
    text-align: center;

    color: #989fdb;

    a {
      text-align: center;
      text-decoration-line: underline;

      color: #9626ac;
    }
  }
`;
