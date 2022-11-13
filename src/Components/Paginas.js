import React from "react";
import { Routes , Route} from "react-router-dom"
import { Inicio } from "./Inicio";
import { Preguntas } from "./PreguntasFrecuentes";
import { ProductosLista } from "./Productos";
import { Local } from "./Locales/Local";

export const Paginas = () => {
    return (
        <section>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/menu" element={<ProductosLista/>}> </Route>
                <Route path="/preguntas"  element={<Preguntas/>}> </Route>
                <Route path="/locales" element={<Local/>}></Route>
            </Routes>
        </section>
    )
}