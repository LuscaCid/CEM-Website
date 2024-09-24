import Faxada from "../assets/Caroussel/Fachada-2 1.png";
import CentroConvencoes from "../assets/Caroussel/Centro-Convencoes-Corredor 2.png";
import Motos from "../assets/Caroussel/Estacionamento-Moto.png";
import elevador from "../assets/Caroussel/Portaria-Acesso.png";
import { useRef } from "react";
import { Button } from "../ui/Button";
import { Section } from "../components/Sections";
import { Metrics } from "../components/MetricsCard";
import { TopPageRedirectButton } from "../components/TopPageRedirectButton";

export default function Home() {
  const pageRefference = useRef<HTMLDivElement|null>(null);
  return (
    <div 
      ref={pageRefference} 
      className="w-full"
    >
      {/* secao de imgns da home page */}
      <header className="grid  grid-cols-2 gap-3 max-w-[1300px] m-auto">
        <img  
          src={Faxada}
          alt="Fachada"
          className="w-full h-full object-cover"
        />
        <div className="grid grid-cols-1 gap-3">
          <img 
            src={CentroConvencoes}
            alt="Centro de convencoes "
            className="w-full object-cover"
          />
          <div className="grid grid-cols-2 gap-3">
            <img 
              className="w-full"
              src={Motos}
              alt="Centro de convencoes  object-cover"
              />
            <img 
              className="w-full"
              src={elevador}
              alt="Centro de convencoes  object-cover"
            />
          </div>
        </div>
      </header>
      {/* visao geral */}
      <Section 
        isBlue
        className="flex flex-col gap-4 items-start"
        title="TÍtulo para visão geral"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque perferendis quibusdam, quisquam error nostrum tenetur animi deserunt illum vitae unde minus illo excepturi laudantium, iusto earum tempora? Esse, quaerat laborum!"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum praesentium perspiciatis molestiae eligendi ullam, facilis earum, saepe excepturi velit quam repellendus quasi, est molestias? Quam, animi voluptatibus. Aut, nesciunt voluptas!
        </p>    
        <Button title="Assinar"/>
      </Section>
      <Section className="py-2 px-24" >
        <Metrics />
      </Section>  
      <TopPageRedirectButton />
      <Section 
        isBlue
        title="Titlo para estrtura e eventos"
      >
        <div>
          alooo galera de cowboy
        </div>
      </Section>
    </div>
  );
}
