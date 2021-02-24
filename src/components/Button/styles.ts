import styled from 'styled-components';
import { lighten, linearGradient } from 'polished';

export const Container = styled.button`
  margin-top: 24px;
  width: 256px;
  height: 48px;
  left: 877px;
  top: 511px;

  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  box-shadow: 0px 10px 25px #cf99db;
  border-radius: 8px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  border: none;

  :hover {
    cursor: pointer;
    background: ${linearGradient({
      colorStops: [
        `${lighten(0.05, '#383e71')} 0%`,
        `${lighten(0.05, '#9d25b0')} 99.18%`,
      ],
      toDirection: '267.79deg',
    })};
  }
`;
