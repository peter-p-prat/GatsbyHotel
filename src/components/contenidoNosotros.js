import React from 'react';
import { graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Titulo = styled.h2`
  padding: 3rem 4rem;
  text-align: center;
  font-size: 4rem;
  color: var(--textoOscuro);
`;

const Pagina = styled.div`
  padding-top: 1rem;
  max-width: 1200px;
  width:95%;
  margin: 0 auto 5rem auto;

  
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 4rem;
  
`;
const Texto = styled.p`
  color: var(--textoOscuro);
  line-height: 2;
`;

const Img = styled(Image)`
border-radius: 10px;

`;
const ContenidoNosotros = () => {

    const resultado = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: { slug: { eq: "nosotros"} } ) {
          nodes {
            titulo
            contenido
            imagen {
              fluid(maxWidth:1200 ) {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `)
    
    const { titulo, contenido, imagen } = resultado.allDatoCmsPagina.nodes[0];

    return ( 
        <>
            <div css={css`
            width:100vw;
            background-color: var(--fondoClaro);
            
            `}>
                <Titulo>{titulo}</Titulo>
                <Pagina>
                    <Texto>{contenido}</Texto>
                    <Img 
                    fluid={imagen.fluid}
                    />
                </Pagina>
            </div>
            
        </>
     );
}
 
export default ContenidoNosotros;