import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  border: 1px solid rgba(123, 74, 226, 0.5);
  padding: 30px;
  width: 360px;
  height: 460px;
  transition: all .3s;

  &:hover {
    background: rgba(123, 74, 226, 0.10);
  }

  @media (max-width: 480px) {
    padding: 30px 24px;
    width: 300px;
    height: 371px;
  }
`;


export const TitleProjeto = styled.h3`
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;

  @media (max-width: 480px) {
    font-size: 16px;
  }


`;


export const Description = styled.p`

color: rgba(255, 255, 255, 0.50);
font-size: 14px;
font-weight: 400;

`;

export const Tags = styled.div`
  gap: 8px;
  display: flex;

  margin-bottom: 22px;
  @media (max-width: 480px) {
    margin-top: 9px;
    margin-bottom: 16px;
  }

`;

export const LinkProjeto = styled.a`

  >img{
    width: 300px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 8px;
    width: 100%;


  }

`;

export const Text = styled.div`

`;

export const InfoProject = styled.div`



`;
