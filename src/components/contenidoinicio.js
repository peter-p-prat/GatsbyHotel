import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';


const Titulo = styled.h2`
  padding: 4rem;
  text-align: center;
  font-size: 4rem;
  color: var(--textoOscuro);
`;

const Pagina = styled.div`
  
  max-width: 1200px;
  width:95%;
  margin: 0 auto;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Texto = styled.p`
  color: var(--textoOscuro);
  line-height: 2;
`;
const Img = styled(Image)`
border-radius: 10px;
`;

const ContenidoInicio = () => {
    const informacion = useStaticQuery(graphql`
    query {
        allDatoCmsPagina(filter: { slug: { eq: "inicio"} } ) {
          nodes {
            titulo
            contenido
            imagen {
              fluid {
                ...GatsbyDatoCmsFluid
              }
            }
          }
        }
      }
    `)
    // console.log(informacion.allDatoCmsPagina.nodes[0]);
    const { titulo, contenido, imagen } = informacion.allDatoCmsPagina.nodes[0];
    return ( 
        <>
          
          
          <div css={css`
            width:100vw;
            background-color: var(--fondoClaro);
            padding-bottom: 3rem;
          `}>
          <Titulo>{titulo}</Titulo>
          <Pagina>
            <Texto>{contenido}</Texto>  
            <Img fluid={imagen.fluid} />
            
          </Pagina>
          </div>
          
        </>
     );
}
 
export default ContenidoInicio;