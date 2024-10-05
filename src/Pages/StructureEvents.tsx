import { Section } from "../components/Sections";
import { TopPageIndicator } from "../components/TopPageIndicator";
import CentroCorredor from "../assets/Caroussel/Centro-Convencoes-Corredor 2.png";
import Motos from "../assets/Caroussel/Estacionamento-Moto.png";
import Auditorio from "../assets/Caroussel/Centro-de-Convencoes-Sala2 1.png";
import Rotativo from "../assets/Caroussel/Estacionamento-Rotativo 1.png";
import Phone from "../assets/Icons/Phone icon.png";
import Mail from "../assets/Icons/Email Icon.png";
import buffet from "../assets/Icons/Buffet.png";
import sustentabilidade from "../assets/Icons/Sustentabilidade (1).png";
import ar from "../assets/Icons/Ar Condicionado.png";
import trad from "../assets/Icons/Traducao.png";
import wifi from "../assets/Icons/Wifi.png";
import mult from "../assets/Icons/Projetores Multimídia.png";
import som from "../assets/Icons/Sonorização.png";
import mob from "../assets/Icons/Mobiliário.png";
import cem from "../assets/Icons/Centro Convencoes.png";
import vagas from "../assets/Icons/Vagas Estacionamento (1).png";
import { useMemo } from "react";
export function StructureEvents () {
  return (
    <main>
      <TopPageIndicator page ="StructureEvents"/>
      <Section 
        className="flex flex-col gap-6"
        title="Título sobre o Centro de Convenções lorem ipsum dolor sit amet" 
        isBlue
      >
        <main className="flex gap-5 w-full justify-center">
          <div className="flex flex-col w-1/3 gap-5">
            <header>
              <p className="text-lg w-full">
              Lor o voluptates ad ipsam quibusdam officiis aut, natus amet quae iste placeat facilis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, pariatur autem. Eaque voluptates explicabo numquam cumque blanditiis veniam soluta vel nostrum dolores. Iste similique eligendi nulla voluptate dolorem. Nam, maxime. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio quasi maxime perferendis unde magni dolores sunt omnis earum natus ducimus ea, impedit qui harum perspiciatis possimus excepturi quis cum blanditiis?
              </p>
            </header>
            <footer>
              <ul className="flex flex-col gap-5">
                <li className="flex gap-4">
                  <img src={Phone} alt="" />
                  <span>
                    Tel.: (21) 3288-7328 
                  </span>
                </li>
                <li className="flex gap-4">
                  <img src={Mail} alt="" />
                  <span>
                    cconvencoes@mourisco.com
                  </span>
                </li>
              </ul>
            </footer>
          </div>
          <aside className="grid grid-cols-2 gap-5 w-2/3">
            <img className="w-full aspect-video h-full object-cover "   src={CentroCorredor} alt="imagem do " />
            <img className="w-full aspect-video h-full object-cover " src={Auditorio} alt="imagem do " />
            <img className="w-full aspect-video h-full object-cover " src={Rotativo} alt="imagem do " />
            <img className="w-full aspect-video h-full object-cover " src={Motos} alt="imagem do " />
          </aside>
        </main>
        <footer>
          <ThingsCard />
        </footer>
      </Section>
      <Section 
        title="Título sobre as empresas e serviços lorem ipsum dolor sit amet"
        description="  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis sit, omnis impedit consequatur perspiciatis fugiat accusamus iure dignissimos deserunt quos. Quis nobis nam aperiam blanditiis odio voluptates magni vel deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem illo, ipsam possimus aut velit a doloremque quod. Totam quibusdam sequi quo porro tenetur esse aspernatur nesciunt quidem dicta ex.lorem Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aut eos repellendus placeat, facilis quisquam earum impedit sequi, minus dolores vitae laborum enim suscipit cumque omnis iure natus ad. Modi."
      >
        <div>
        
        </div>
      </Section>
    </main>
  );
}

type CemThings = "salao" | "Ar Condicionado" | "Estacionamento" | "Sustentabilidade" | "WiFi" | "Buffet" | "traducao" | "Projetores Multimídia" | "Sonorização completa" | "Mobiliário";

function ThingsCard (){
  // in this way it can be more simple than using an complex object to subtitle and image properties, its only use the key property as subtitle and refference to the img
  const thingsTopDictionary : Partial<Record<CemThings, string>> = useMemo(() => ({
    salao : cem,
    "Ar Condicionado" : ar,
    Estacionamento : vagas,
    Sustentabilidade : sustentabilidade,
    WiFi : wifi,
    
  }), []);
  const thingsBottomDictionary : Partial<Record<CemThings, string>> = {
    Buffet : buffet,
    traducao : trad,
    "Projetores Multimídia" : mult,
    "Sonorização completa" : som,
    "Mobiliário" : mob
  }
  return (
    <section className="flex  flex-col items-center justify-center">
      <header className="flex flex-wrap gap-12  2xl:14 items-center m-auto w-full justify-between">
        {
          Object.keys(thingsTopDictionary).map((thing ) => (
            <article className="flex flex-col gap-6 items-center  ">
              <img className="w-32 text-black"  src={thingsTopDictionary[thing as keyof typeof thingsTopDictionary]}/>
              <p>
                {thing}
              </p>
            </article>
          ))
        }
      </header>
      <footer className="flex flex-wrap gap-12 2xl:14 items-center m-auto w-full justify-between">
      {
          Object.keys(thingsBottomDictionary).map((thing ) => (
            <article className="flex flex-col gap-6 items-center">
              <img className="w-32 text-black"  src={thingsBottomDictionary[thing as keyof typeof thingsBottomDictionary]}/>
              <p>
                {thing}
              </p>
            </article>
          ))
        }
      </footer>
    </section>
  
  );
}