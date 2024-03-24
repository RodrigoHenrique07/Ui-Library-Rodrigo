import { ContainerTags } from './styled';

interface TypeTags {
  texto: string;
}

export function TagsProjetos({ texto }: TypeTags) {
  return (
    <ContainerTags>
      <p>{texto}</p>
    </ContainerTags>
  );
}
