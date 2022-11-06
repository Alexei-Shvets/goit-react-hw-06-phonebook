import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;  
`;

export const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    133deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(121, 9, 111, 1) 0%,
    rgba(0, 215, 255, 1) 100%
  );
  color: var(--second-text-color);
  margin-right: 5px;
  padding: 15px;
  border-radius: 50%;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 30px;
  }
`;

export const Number = styled.p`
  font-weight: 600;
  margin-right: 5px;
  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 30px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 50%;
  background-color: var(--accent-bg-color);
  color: var(--second-text-color);
  cursor: pointer;
  transition: background-color var(--main-hover-animation);
  :hover,
  :focus {
    background-color: #2b2b2b;
  }
`;