import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Img = styled(Image)`
    border-radius: 10px;
`;

const Titulo = styled.h2`
  padding: 3rem 4rem;
  text-align: center;
  font-size: 4rem;
  color: var(--textoOscuro);
`;

const Texto = styled.p`
  color: var(--textoOscuro);
  line-height: 2;
`;

export const query = graphql`
    query($slug: String!) {
        allDatoCmsHabitacion(filter: { slug: { eq: $slug } }) {
            nodes {
                titulo
                contenido
                imagen {
                    fluid(maxWidth:1200) {
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
        }
    }
`

const HabitacionTemplate = ({data: {allDatoCmsHabitacion: { nodes }}}) => {
    const { titulo, contenido, imagen } = nodes[0];
    return ( 

        <Layout>
            <main
                css={css`
                    margin: 4rem auto;
                    max-width: 1200px;
                    width: 95%;
                `}
            >
                <Titulo>{titulo}</Titulo>
                <Texto>{contenido}</Texto>
                <Img 
                    fluid={imagen.fluid}
                />
            </main>
            

        </Layout>
    );
}
 
export default HabitacionTemplate;