import {
  Container,
  ContainerPeriodo,
  Description,
  Periodo,
  Tempo,
  TitleTrajetoria
} from './styled';

interface TypeTrabalhos {
  titulo: string;
  text: string;
  time: string;
  periodo: string;
}

export function TrajetoriaCard({ titulo, text, time, periodo }: TypeTrabalhos) {
  return (
    <>
      <Container>
        <TitleTrajetoria>{titulo}</TitleTrajetoria>
        <Description>{text}</Description>

        <ContainerPeriodo>
          <Tempo>{time}</Tempo>
          <Periodo>{periodo}</Periodo>
        </ContainerPeriodo>
      </Container>
    </>
  );
}
