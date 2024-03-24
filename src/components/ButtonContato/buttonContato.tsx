import { ReactNode } from 'react';
import { ContainerButtonContato } from './styled';

interface TypeTags {
  texto: string;
  children?: ReactNode;
}

export function ButtonContato({ texto, children }: TypeTags) {
  return (
    <ContainerButtonContato>
      {children}
      <p>{texto}</p>
    </ContainerButtonContato>
  );
}
