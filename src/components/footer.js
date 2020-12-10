import React from "react"
import { css }from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navegacion from "./nav";

const EnlaceHome = styled(Link)`
  text-decoration:none;
`
const Footer = () => {
    const year = new Date().getFullYear();

  return (
    <>
        <footer
        css={css`
            background-color: var(--header);
            padding: 1rem;
        `}
        >
        <div
            css={css`
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;

            @media (min-width: 768px) {
                
            }

            @media (max-width : 767px) {
                flex-direction: column;
                padding-bottom: 1rem;
            }

            `}
        >

            <Navegacion />

            <EnlaceHome
            to='/'
            >
            <h1
                css={css`
                color: #75AA7A;
                `}
            >Hotel Gatsby</h1>
            </EnlaceHome>
            

            

            
        </div>
        </footer>
        <p
            css={css`
                text-align:center;
                background-color: grey;
                color: white;
                margin: 0;
                padding: 1rem;
            `}
        >Sitio desarrollado por Pedro Peirano Prat - Argentina -  {year} &copy; <EnlaceHome
        to='https://github.com/peter-p-prat'
        > https://github.com/peter-p-prat </EnlaceHome></p>
    </>
  )
}

export default Footer