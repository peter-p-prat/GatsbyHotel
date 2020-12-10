import React from 'react';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'gatsby';

const Card = styled(Link)`
    text-decoration: none;
    color: var(--textoOscuro);
    margin-bottom: 2rem;
    border-radius:10px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);
    -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);
    transition: transform .5s;

    &:hover {
        transform: translateY(-1.5rem) scale(1.03);
    }
    
`
const Texto = styled.p`
    height: 27rem;
    overflow:hidden;
    text-overflow: ellipsis;
    line-height: 3rem;
    mask-image: linear-gradient(to top, transparent , black , black, black);
   
`
const Boton = styled(Link)`
    margin-top: 1rem;
    padding: 1rem;
    background-color: var(--textoOscuro);
    color:#FFF;
    width:100%;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
    border-radius:10px;

`
const Img = styled(Image)`
    border-radius:10px 10px 0 0;
`
const HabitacionPreview = ({habitacion}) => {
    const { contenido, imagen, titulo, slug } = habitacion;

    return ( 
        <Card to={slug}>
            <Img 
                fluid={imagen.fluid}
            />
            <div
                css={css`
                    padding:3rem;
                `}
            >
                <h3
                    css={css`
                        font-size: clamp(2rem, 2.1vw, 2.8rem);
                    `}
                >{titulo}</h3>
                <Texto>{contenido}</Texto>
                
                <Boton to={slug}>Ver Habitacion</Boton>
            </div>
        </Card>
     );
}
 
export default HabitacionPreview;