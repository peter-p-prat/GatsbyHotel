import React from "react"
import { css }from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Navegacion from "./nav";

const EnlaceHome = styled(Link)`
  text-decoration:none;
`
const Header = () => {
  return (
    <header
      css={css`
        background-color: var(--header);
        padding: 1rem;

        @media (min-width: 768px) {
            height: 73.75px;
          };
          @media (max-width: 768px) {
            height: 16.64vh;
          };
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;

          

          @media (max-width : 767px) {
            flex-direction: column;
            padding-bottom: 1rem;
          };

        `}
      >
        <EnlaceHome
          to='/'
        >
          <h1
            css={css`
              color: #75AA7A;
            `}
          >Hotel Gatsby</h1>
        </EnlaceHome>
        

        <Navegacion />

        
      </div>
    </header>
  )
}

export default Header
