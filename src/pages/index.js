import React from "react";
import styled from '@emotion/styled';
import ImagenHotel from "../components/imagenHotel"
import Layout from "../components/layout"
import ContenidoInicio from "../components/contenidoinicio"
import useHabitaciones from "../hooks/useHabitaciones"
import HabitacionPreview from "../components/habitacionPreview";

const Titulo = styled.h2`
    padding: 4rem;
    text-align: center;
    font-size: 4rem;
    color: var(--textoOscuro);
  `;

const ListadoHabitaciones = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    column-gap: 3rem;
    grid-auto-rows: 1fr;
    row-gap:2rem;
  
`
const SeccionHabitaciones = styled.div`
  background-color: var(--fondoClaro);
`
const IndexPage = () => {

  const habitaciones = useHabitaciones();
  console.log(habitaciones);

  return (
    <Layout>
      <ImagenHotel />
      <ContenidoInicio />
      <SeccionHabitaciones>
        <Titulo>Nuestras Habitaciones</Titulo>
        <ListadoHabitaciones>
          {habitaciones.map(habitacion => (
            <HabitacionPreview 
              key={habitacion.id}
              habitacion={habitacion}
            />
          ))}
        </ListadoHabitaciones>
      </SeccionHabitaciones>
      
    </Layout>
  )
}

export default IndexPage
