import { ReactNode } from 'react';
import { ContainerTopbar } from './styled';

interface TypeTopbar {
  children: ReactNode;
}

export function Topbar({ children }: TypeTopbar) {
  return (
    <>
      <ContainerTopbar>
        {children}
      </ContainerTopbar>
    </>
  );
}
