import { ContainerTitle } from './styled';

interface TypeTags {
  texto: string;
}

export function Title({ texto }: TypeTags) {
  return (
    <ContainerTitle>
      {texto}
    </ContainerTitle>
  );
}
