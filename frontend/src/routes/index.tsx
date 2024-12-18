import { Routes, Route } from "react-router-dom";
import {Home} from "../pages/Home"
import { Adicionar } from "../pages/Adicionar";
import { Visualizar } from "../pages/Visualizar";
import { Deletar } from "../pages/Deletar";


export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adicionar" element={<Adicionar />} />
            <Route path="/visualizar" element={<Visualizar />} />
            <Route path="/deletar" element={<Deletar />} />
        </Routes>
    )
}