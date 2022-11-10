import styled from '@emotion/styled';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const Button = styled.button`
  margin: 0 10px;
  padding: 13px 16px;
  font-weight: 600;
  background: transparent;
  background-color: papayawhip;
  border-radius: 5px;
  border: 3px solid DarkRed;
  font-size: 18px;
  text-transform: uppercase;
  cursor: pointer;
  border-style: double;
  color: green;

  &:hover {
    box-shadow: rgb(0 0 0 / 15%) 0px 4px 4px;
  }
`;

// options={['good', 'neutral', 'bad']}
