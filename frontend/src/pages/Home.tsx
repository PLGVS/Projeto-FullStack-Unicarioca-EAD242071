import { Buttons } from "../components/Buttons";
import { Navbar } from "../components/Navbar";


export function Home(){
    return (
        <>
            <Navbar />
            <div className="menu-botoes">
            <Buttons />
            </div>
        </>
    )
}