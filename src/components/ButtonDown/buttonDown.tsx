
import { ReactNode } from 'react';
import { ContainerButtonDown } from './styled';

interface TypeTags {
  texto: string;
  children?: ReactNode;

}

export function ButtonDown({ texto, children }: TypeTags) {
  return (
    <ContainerButtonDown>
      <p>{texto}</p>
      {children}

    </ContainerButtonDown>
  );
}
