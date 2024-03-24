import { ContainerSubtitle } from './styled';

interface TypeTags {
  texto: string;
}

export function Subtitle({ texto }: TypeTags) {
  return (
    <ContainerSubtitle>
      {texto}
    </ContainerSubtitle>
  );
}
