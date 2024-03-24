
import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;
  border-radius: 16px;
  border: 1px solid rgba(123, 74, 226, 0.5);
  padding: 30px;
  width: 100%;
  max-width: 580px;
  transition: all .3s;

  &:hover {
    background: rgba(123, 74, 226, 0.10);
  }


  @media (max-width: 480px) {
    padding: 15px;
  }
`;



export const TitleTrajetoria= styled.h3`
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
font-size: 16px;
font-weight: 400;

@media (max-width: 480px) {
    font-size: 14px;
  }


`;

export const ContainerPeriodo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const Tempo = styled.p`
color: #7B4AE2;
font-size: 18px;
font-weight: 700;

@media (max-width: 480px) {
    font-size: 12px;
  }



`;

export const Periodo = styled.p`
color: #7B4AE2;
font-size: 18px;
font-weight: 400;

@media (max-width: 480px) {
    font-size: 12px;
  }



`;


