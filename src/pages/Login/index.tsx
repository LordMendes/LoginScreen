import { Background, Container, Content, LoginBox } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const Login: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <LoginBox>
          <h1>Olá, seja bem-vindo!</h1>
          <header>Para acessar a plataforma faça seu login.</header>

          <Input title="E-MAIL" />
          <Input title="SENHA" />
          <Button title="ENTRAR" />
          <p>
            Esqueceu seu login ou senha? Clique{' '}
            <a href="http://google.com">aqui</a>
          </p>
        </LoginBox>
      </Content>
    </Container>
  );
};

export default Login;
