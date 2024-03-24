import styled from 'styled-components';

export const ContainerTags = styled.button`
  display: inline-flex;
  font-size: 16px;
  padding: 5px 8px;
  background:  rgba(123, 74, 226, 0.1);
  border-radius: 16px;
  border: none;


  > p {
    font-size: 20px;
    font-weight: 700;
    color: #7B4AE2;
  }

  @media (max-width: 480px) {
    >p{
      font-size: 12px;
    }
  }
`;
