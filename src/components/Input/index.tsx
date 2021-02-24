import { InputHTMLAttributes, useCallback, useState } from 'react';
import { InputBox, Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ title, type }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => setIsFocused(true), []);
  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <p>{title}</p>
      <InputBox isErrored={false} isFocused={isFocused}>
        <input
          type={type}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
      </InputBox>
    </Container>
  );
};

export default Input;
