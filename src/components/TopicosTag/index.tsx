import { ContainerTopicos } from './styled';

interface TypeTopicos {
  icon: string;
  texto: string;
}

export function TopicosTag({ icon, texto }: TypeTopicos) {
  return (
    <ContainerTopicos>
      <div>{icon}</div>
      <p>{texto}</p>
    </ContainerTopicos>
  );
}
