import React from "react";
import Formulario from "../components/Formulario";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const crearCita = jest.fn();

test("<Formulario /> funsionalidad del formulario", () => {
  //   const wrapper = render(<Formulario />);
  //   wrapper.debug();
  render(<Formulario crearCita={crearCita} />);
  // expect(screen.getByText("Crear Cita")).toBeInTheDocument();
  //heading
  expect(screen.getByTestId("title")).toBeInTheDocument();
  expect(screen.getByTestId("title").tagName).toBe("H2");
  expect(screen.getByTestId("title").textContent).toBe("Crear Cita");

  //button submit
  expect(screen.getByTestId("btn-submit").tagName).toBe("BUTTON");
  expect(screen.getByTestId("btn-submit").textContent).toBe("Agregar Cita");
});
