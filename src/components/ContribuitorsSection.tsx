import { useMemo } from "react";
import Key from "../assets/ContribuitorsIcons/Sindico 2.png";
import Folder from "../assets/ContribuitorsIcons/Gerente Geral 2.png";
import ComunismIcon from "../assets/ContribuitorsIcons/Gerente operacional 2.png";
import Maps from "../assets/ContribuitorsIcons/Gerente Regional 2.png";
interface CardProps {
  img : string;
  contribuitorName : string;
  role : string;
}
export function ContribuitorsSection  (){
  const contribuitors : CardProps[] = useMemo(()=> {
    return [
      {
        img: Key,
        contribuitorName: "Péricles dos Anjos",
        role: "Síndico"
      },
      {
        img: Folder,
        contribuitorName: "Viviane Mendes",
        role: "Gerente Geral"
      },
      {
        img: ComunismIcon,
        contribuitorName: "Eldo Salles",
        role: "Gerente Operacional"
      },
      {
        img: Maps,
        contribuitorName: "Carolina Assad",
        role: "Gerente Regional"
      },
    ];
  }, []);
  return (
    <section className="w-full flex items-center md:flex-row sm:flex-col justify-between">
      {
        contribuitors.map(card => (
          <ContribuitorsCard key={card.contribuitorName} {...card} />
        ))
      }
    </section>
  );
}

function ContribuitorsCard (props : CardProps){
  return (
    <article className="flex flex-col gap-5 max-w-[250px]">
      <header className="rounded-full flex items-center justify-center p-4 bg-[#22181C] lg:h-[150px] lg:w-[150px] 2xl:h-[200px] 2xl:w-[200px]">
        <img src={props.img} alt="" />
      </header>
      <main>
        <h1 className="font-semibold uppercase text-lg">{props.contribuitorName}</h1>
      </main>
      <footer>
        <p className="text-md font-normal">{props.role}</p>
      </footer>
    </article>
  );
}