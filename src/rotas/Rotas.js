import { Route, Routes } from "react-router-dom";
import Experimente from "../pages/cadastro/experimente/Experimente";
import ListarExperimente from "../pages/listagem/experimente/ListarExperimente";

const Rotas = () => {
    return (
        <Routes>
            <Route path="*" element={<Experimente/>} />
            <Route path="experimente/listar" element={<ListarExperimente/>} />
        </Routes>
    )
}
export default Rotas;