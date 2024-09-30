import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg"
import { Button } from "../ui/Button";
import ArrowRight from "../assets/Icons/Seta Direita.svg";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Instagram from "../assets/Icons/Instagram.png";
import Facebook from "../assets/Icons/Facebook.png";
import Twitter from "../assets/Icons/Twitter.png";
import { FacebookIcon, LucideInstagram, TwitterIcon, XIcon } from "lucide-react";
const formSchema = z.object({
    productServiceQuery : z.string().min(4, "Não foi possivel")   
});
type FormSchemaType = z.infer<typeof formSchema>
export function PagesFooter (){
    const { register, handleSubmit, formState : { isLoading } } = useForm<FormSchemaType>({
        resolver : zodResolver(formSchema)
    });
    const handleSubmitForm = (values : FormSchemaType) => {
        console.log("Formulário enviado", values);
    }
    return (
        <footer className="w-full bg-footer px-20 py-8 self-end items-end ">
            <main className="flex gap-20">
                <nav className="flex flex-col gap-3 w-1/3">
                    <ul className="flex flex-col text-white gap-3  ">
                        <img 
                            className="w-2/3 max-w-[200px]"
                            src={Logo}
                            alt="Logo da corporação."
                        />  
                        <li><NavLink to={"/about"}>Quem Somos</NavLink></li>
                        <li><NavLink to={"/sctructureEvents"}>Estrutura e eventos</NavLink></li>
                        <li><NavLink to={"/blog"}>Blog</NavLink></li>
                    </ul>
                    <form
                        onSubmit={handleSubmit(handleSubmitForm)} 
                        className="flex gap-2 max-w-[350px]"
                    >
                        <input 
                            placeholder="Procurar empresas/serviços"
                            type="text" 
                            className="rounded-md bg-white p-2 text-md w-full" 
                        />
                        <Button 
                            title="Enviar"
                            type="submit"
                        />
                    </form>
                </nav>
               
                <aside className="flex gap-20 justify-between items-start  text-white">
                    <ul className="flex flex-col gap-6">
                        <legend className="text-lg">
                            Horários
                        </legend>
                        <section className="flex flex-col gap-1">
                            <h2> Administração:</h2>
                            <li className="text-md">
                                Seg. à Sex. - 09h às 18h
                            </li>
                        </section>
                        <section  className="flex flex-col gap-1">
                            <h2>Recepção:</h2>
                            <ul className="flex flex-col gap-1">
                                <li>Seg. à Sex  - 7h às 21h</li>
                                <li>Sáb. - 7h às 17h</li>
                            </ul>
                        </section>
                        <section  className="flex flex-col gap-1">
                            <h2>Estacionamento</h2>
                            <span>24h</span>
                        </section>
                    </ul>
                    <ul className="flex flex-col gap-8">
                        <legend className="text-lg">
                            Contato
                        </legend>
                        <ul className="flex flex-col gap-1">
                            <li className="text-md">Praia de Botafogo, 501</li>
                            <li className="text-md">Botafogo - Rio de Janeiro, RJ</li>
                            <li className="text-md">CEP:  22250-040 </li>
                        </ul>
                        <span className="flex items-center gap-2">Veja como chegar <img src={ArrowRight} alt="Seta para direita sobre link para redirecionamento para ver como chegar no CEM" /></span>
                        <ul className="flex flex-col gap-1">
                            <li>Tel.: (21) 2543-3881</li>
                            <li className="font-bold underline">cempresarial@mourisco.com</li>
                        </ul>
                    </ul>
                    <ul className="flex flex-col gap-3">
                        <li className="flex items-center gap-5 ">
                            <div className=" rounded-full p-1.5 flex items-center justify-center  bg-main text-zinc-100">
                                <FacebookIcon />
                            </div> facebook
                        </li>
                        <li className="flex items-center gap-5 ">
                            <div className=" rounded-full p-1.5 flex items-center justify-center  bg-main text-zinc-100">
                                <LucideInstagram />
                            </div> Instagram
                        </li>
                        <li className="flex items-center gap-5 ">
                            <div className=" rounded-full p-1.5 flex items-center justify-center  bg-main text-zinc-100">
                                <XIcon />
                            </div> Twitter
                        </li>
                    </ul>
                </aside>
            </main>
        </footer>
    );
}  