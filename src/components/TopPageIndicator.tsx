import { useMemo } from "react";
import Home from "../assets/Icons/Home.png";
type Pages = "About" | "StructureEvents" | "Blog" | "Contact" | "NewsLetter"; 

export function TopPageIndicator({page} : {page : Pages}){
  const PageDictionaryLabel : Record<Pages, string>=  useMemo(() => {
    return {
      About : "Sobre nós",
      StructureEvents : "Estrutura dos eventos",
      Blog : "Blog",
      Contact : "Contato",
      NewsLetter : "Newsletter"
    }
  }, [])
  return (
    <header className="flex gap-1 w-full">
      <img 
        src={Home}
        alt={"icone de home"}
      />
      <span>
        {'>'} {PageDictionaryLabel[page] }
    </span>
  </header>
  );
}