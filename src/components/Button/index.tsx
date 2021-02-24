import { Container } from './styles';

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return <Container>{title}</Container>;
};
export default Button;
