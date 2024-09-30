import { ContribuitorsSection } from "../components/ContribuitorsSection";
import { Section } from "../components/Sections";
import { TopPageIndicator } from "../components/TopPageIndicator";
import Fachada from "../assets/Caroussel/Fachada.png";
import Missao from "../assets/Icons/Missao.png"
import Valores from "../assets/Icons/Valores 1.png"
import Visao from "../assets/Icons/Visao.png"
import { UsefulSlugIconSection } from "../components/UsefulSlugSection";
import { AccordionsSection } from "../components/AccodionsSection";

export function About() {
  return (
    <main className="flex items-center gap-2 flex-col ">
      <div className="py-1 w-full px-28">
        <TopPageIndicator page="About"/>
      </div>
      <Section
      className="flex flex-col gap-5" 
      title="Título sobre a história do CEM 
lorem ipsum dolor sit amet"
      isBlue>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut atque optio laboriosam vero iure. Unde optio qui, consequatur ducimus aspernatur libero iure exercitationem excepturi asperiores voluptatem, assumenda quibusdam eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ut quaerat consectetur? Aperiam blanditiis excepturi est ex illo nostrum? Deserunt debitis voluptatibus quia odit corrupti, vitae neque numquam. Saepe, officiis.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum magni quidem ex animi sapiente laboriosam incidunt, labore ipsam dolorum voluptatem sit facilis saepe minus nam eveniet deserunt harum veritatis?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto aperiam nesciunt modi mollitia quo deleniti nisi, eveniet possimus? Cum error sit esse cumque. Vel sapiente voluptas nam molestiae nihil.</p>
        <ContribuitorsSection />
      </Section>
      <Section className="flex  gap-10">
        <img className="w-1/2" src={Fachada} alt="Imagem que representa a faixada do predio" />
        <aside>
          <ul className="flex flex-col justify-between h-full">
            <li className="flex items-center gap-10">
              <img src={Missao} alt="" />
              <aside>
                <h2 className="text-lg font-bold">Título sobre missao</h2>
                <p className="text-sm">paragrath Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam aperiam dolorum minus incidunt fugiat, magni non quibusdam nam doloribus reprehenderit </p>
              </aside>
            </li>
            <li className="flex  items-center gap-10">
              <img src={Visao} alt="" />
              <aside>
                <h2 className="text-lg font-bold">Título sobre visao</h2>
                <p className="text-sm">paragrath Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam aperiam dolorum minus incidunt fugiat, magni non quibusdam nam doloribus reprehenderit </p>
              </aside>
            </li>
            <li className="flex gap-10 items-center">
              <img src={Valores} alt="" />
              <aside>
                <h2 className="text-lg font-bold">Título sobre valores</h2>
                <p className="text-sm">paragrath Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam aperiam dolorum minus incidunt fugiat, magni non quibusdam nam doloribus reprehenderit </p>
              </aside>
            </li>
          </ul>
        </aside>
      </Section> 
      <Section 
        title="Título sobre a  Infraestrutura lorem ipsum dolor sit amet" 
        className="flex items-center flex-col mt-0 pt-0"
      >
        <>
        <UsefulSlugIconSection />
        
        </>

      </Section>
      <Section>
        <AccordionsSection />
      </Section>
    </main>
  );
}