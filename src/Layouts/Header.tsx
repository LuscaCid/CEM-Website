'use client'
import Logo from "../assets/Logo.svg";
import * as Dialog from "@radix-ui/react-dialog";
import { Search } from "lucide-react";
import { NavLink } from "react-router-dom";
import { TextLink } from "../ui/TextButton";
import { Button } from "../ui/Button";
export function Header () {
    return (
        <header className="flex justify-between fixed items-center bg-secondary w-full shadow-sm py-4 px-16">
            <NavLink
                to={'/'}
            >
                <img 
                    className="select-none min-w-[120px]"
                    src={Logo}
                    alt="Imagem logo da Empresa"
                />
            </NavLink>
            
            <ul className="list-none flex items-center gap-7">
                <TextLink
                    to="/about"
                    title="Quem somos"
                />
                <TextLink
                    to="/structureEvents"
                    title="Estrutura e eventos"
                />
                <TextLink
                    to="/blog"
                    title="Blog"
                />
                <TextLink
                    to="/contact"
                    title="Contato"
                />
                <div className="h-6 border-r-2 border-zinc-500"/>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <Search className="text-white" />
                </Dialog.Trigger>
                <Dialog.Overlay className="bg-zinc-700/40 absolute inset-0 z-10"/>
                <Dialog.Portal>
                    <Dialog.Content 
                        className="absolute py-2 px-4  z-20 rounded-md  w-fit  backdrop-blur-md border"
                    >
                        <form className="flex gap-2 items-center">
                            <input 
                                className="rounded-md p-2 "
                                placeholder="Buscar"
                                type="text" 
                            />
                            <Button 
                                description="Buscar"
                                title="Buscar"
                                
                            />
                        </form>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
            <Button 
                title="NEWSLETTER"
                onClick={() => console.log("worked")}
                description="Navegar para newsletter"
            />
            </ul>
        </header>
    );

}
