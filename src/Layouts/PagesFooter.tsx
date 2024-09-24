import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg"
import { Button } from "../ui/Button";
export function PagesFooter (){
    return (
        <footer className="w-full bg-footer px-12 py-8 self-end items-end ">
            <main className="flex gap-3">
                <nav className="flex flex-col gap-3">
                    <ul className="flex flex-col text-white gap-3  ">
                        <img 
                            src={Logo}
                            alt="Logo da corporação."
                        />  
                        <li><NavLink to={"/about"}>Quem Somos</NavLink></li>
                        <li><NavLink to={"/sctructureEvents"}>Estrutura e eventos</NavLink></li>
                        <li><NavLink to={"/blog"}>Blog</NavLink></li>
                    </ul>
                    <form 
                        className="flex gap-2"
                    >
                        <input 
                            placeholder="Procurar empresas/serviços"
                            type="text" 
                            className="rounded-md bg-white p-2 text-md" 
                        />
                        <Button 
                            title="Enviar"
                            type="submit"
                        />
                    </form>
                </nav>
               
                <aside className="flex gap-4 text-white">
                    <ul className="flex flex-col gap-3">
                        <legend className="text-lg">
                            Administração:
                        </legend>
                        <li className="text-md">
                            Seg. à Sex. - 09h às 18h
                        </li>
                    </ul>
                    <ul>
                        <legend className="text-lg">

                        </legend>
                        <li className="text-md"></li>
                    </ul>
                </aside>
            </main>
        </footer>
    );
}  