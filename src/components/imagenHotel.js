import React from 'react';
import { graphql, useStaticQuery }from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackground = styled(BackgroundImage)`
    height: 83.36vh;
    @media (min-width: 768px) {
            height: calc(100vh - 73px);
          }
    /* @media ( max-width: 992px) {
      font-size: 5.8rem;
    } */
`;
const TextoImagen = styled.div`
  background-image: linear-gradient( to top, rgba(34,49,63,.8), rgba(34,49,63,.8) );
  color: var(--verde);
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  @media ( max-width: 768px) {
      padding: 2rem;
    };
  
  h1 {
    font-size: 4rem;
    @media ( max-width: 768px) {
      padding-left: 2rem;
    };
    @media ( min-width: 992px) {
      font-size: 5.8rem;
    };
    
  }

  p {
    font-size: 2rem;
    @media ( max-width: 768px) {
      padding-left: 2rem;
    };
    @media ( min-width: 992px) {
      font-size: 2.6rem;
    };
  }
`;


const ImagenHotel = () => {

    const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq: "8.jpg"}) {
          sharp:childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `);

    console.log(image.sharp.fluid);
    return ( 
        <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
          <TextoImagen>
            <h1>Bienvenido a Hotel Gatsby</h1>
            <p>El mejor hotel para tus vacaciones</p>
          </TextoImagen>
        </ImageBackground>
     );
}
 
export default ImagenHotel;