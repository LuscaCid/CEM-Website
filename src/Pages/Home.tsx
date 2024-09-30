import Faxada from "../assets/Caroussel/Fachada-2 1.png";
import CentroConvencoes from "../assets/Caroussel/Centro-Convencoes-Corredor 2.png";
import Motos from "../assets/Caroussel/Estacionamento-Moto.png";
import elevador from "../assets/Caroussel/Portaria-Acesso.png";
import { useRef } from "react";
import { Button } from "../ui/Button";
import { Section } from "../components/Sections";
import { Metrics } from "../components/MetricsCard";
import { TopPageRedirectButton } from "../components/TopPageRedirectButton";
import { HomeCompaniesPartners } from "../components/HomeCompaniesPartnersSection";
import { NoticeCard } from "../components/NoticeCard";
import { useQuery } from "@tanstack/react-query";
import BloodDonation from "../assets/PlacesList/image 1.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonyCard } from "../components/TestimonyCard";
export default function Home() {
  const {data : notices, isLoading, isSuccess} = useQuery({
    queryFn : async () => {
      //call for api to return data fr
      //const response = await api.get("/notices");
    },
    queryKey : ["notices"],
    staleTime : 1000,

  });
  return (
    <div 
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
      <Section className="py-2 " >
        <Metrics />
      </Section>  
      <Section 
        isBlue
        title="Titlo para estrtura e eventos"
        description="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo dolorem, eum architecto repellendus ut quae. Fuga voluptas, necessitatibus, animi nihil natus iste culpa amet, eum ab beatae sequi itaque praesentium?"
      >
        <HomeCompaniesPartners />
      </Section>
      <Section title="Titulo para noticias">
        <div>
          <header className="m-auto flex mb-8
           gap-5 w-full items-center justify-center">
            <button className="h-7 w-7  items-center justify-center rounded-full  bg-secondary text-white">
              <ChevronLeft />
            </button>
            <button className="h-7 w-7  items-center justify-center rounded-full  bg-secondary text-white">
              <ChevronRight className="ml-0.5"/>
            </button>
          </header>
          <footer className="grid grid-cols-4 items-center gap-14">
            {[1,2,3,4].map((element) => (
            <NoticeCard 
              key={element}
              description="lorem Ips incorrectly "
              headerParagraph="lorem Ips incorrectly"
              img={BloodDonation}
              slug="Campanhas"
              title="Titulo da campanha"
            />
          ))}
          </footer>
          
        </div>
      </Section>
      <Section 
        className="relative"
        isBlue 
        title="Titulo para depoimentos"
        description="lorem Ips opcion para el descripción"
      >
        <main>
          <div className="flex gap-3 items-center">
          {
            [1,2,3,].map((element) => (
              <TestimonyCard  personName="Pedro" roleEnterprise="Programador/Sources" testimony="lorem ispnm adaaa adddd" key={element}/>
            ))
          }
          </div>
      
        </main>
        
      </Section>
      <iframe 
      className="w-full" 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9928662272396!2d-43.18326282581381!3d-22.95048983943219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997ff0e299ea4b%3A0x24628b9194358b87!2sCentro%20Empresarial%20Mourisco!5e0!3m2!1spt-BR!2sbr!4v1727574147438!5m2!1spt-BR!2sbr" width="800" height="600" 
      loading="lazy">
        
      </iframe>
    </div>
  );
}
