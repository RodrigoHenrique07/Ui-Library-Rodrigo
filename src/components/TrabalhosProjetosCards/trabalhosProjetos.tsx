import {
  Container,
  Description,
  InfoProject,
  LinkProjeto,
  Tags,
  Text,
  TitleProjeto
} from './styled';

import { ReactNode } from 'react';

interface TypeTrabalhos {
  titulo: string;
  text: string;
  children?: ReactNode;
  img?: string;
  alt?: string;
  url?: string;
}

export function TrabalhosProjetos({
  titulo,
  text,
  img,
  children,
  alt,
  url
}: TypeTrabalhos) {
  return (
    <>
      <Container>
        <Text>
          <TitleProjeto>{titulo}</TitleProjeto>
          <Description>{text}</Description>
        </Text>

        <InfoProject>
          <Tags>{children}</Tags>
          <LinkProjeto href={url} target="_blank" rel="noreferrer">
            <img src={img} alt={alt} />
          </LinkProjeto>
        </InfoProject>
      </Container>
    </>
  );
}
