import styled from 'styled-components';

export const ContainerTopicos = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 5px 10px;
  background:  rgba(123, 74, 226, 0.1);
  border-radius: 16px;
  font-size: 20px;
  border: none;


  > p {
    font-size: 20px;
    font-weight: 700;
    color: #7B4AE2;
  }

  @media (max-width: 480px) {
    >p{
      font-size: 14px;
    }
  }
`;
