import React from "react";
import Helmet from "react-helmet";
import { Global, css } from '@emotion/react';

import Header from "./header";
import Footer from './footer';
import useSeo from "../hooks/use-seo";

const Layout = (props) => {
  
  const seo = useSeo();
  console.log(seo);
  const { titleSuffix ,fallbackSeo: {description, title}} = seo;

  return (
    <>
    <Global 
      styles={css`
        :root{
          //Colores
          --header: #393E50;
          --nav: #C8CB92;
          --verde: #75AA7A;
          --fondoClaro: #C8CB92;
          --textoOscuro: #393E50;

          //Fuentes
          --titulo: 'Bebas Neue', cursive;
          --titulo2: 'Lato', sans-serif;
          --texto: 'Montserrat', sans-serif;
        }
        

        html {
          font-size: 62.5%;
          box-sizing: border-box;
        }
        *, *:before, *:after {
          box-sizing: inherit;
        }
        body {
          font-size: 18px;
          font-size: 1.8rem;
          line-height: 1.5;
          font-family: var(--texto);
          background-color: var(--fondoClaro);
        }
      
        h1, h2, h3 {
          margin: 0;
          line-height: 1,5;
        }
        h1, h2 {
          font-family: var(--titulo2);
          letter-spacing: 0.0625em;
        }
        h3 {
          font-family: var(--texto);
        }
        
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
        }
      `}
    />
    <Helmet>
      <title>{title}{titleSuffix}</title>
      <meta name="description" content={description}/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&family=Bebas+Neue&family=Montserrat:wght@400;700&family=Lato:wght@400;700&display=swap" rel="stylesheet" />

    </Helmet>
      <Header />
      
      {props.children}

      <Footer />
    </>
  )
}

export default Layout
